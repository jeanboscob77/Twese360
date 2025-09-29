"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MessageCircle, X } from "lucide-react";

interface Message {
  sender: "admin" | "client";
  clientId?: string;
  content: string;
  timestamp: string;
}

function TypingIndicator() {
  return (
    <div className="flex space-x-1 p-2 text-gray-500">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
    </div>
  );
}
const socket = io("http://localhost:5000");

export default function ClientChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const socketRef = useRef<Socket | null>(null);
  const [adminOnline, setAdminOnline] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // admin typing indicator

  let typingTimeout: NodeJS.Timeout;

  useEffect(() => {
    socketRef.current = socket;

    socket.emit("client_join");

    // receive message from admin
    socket.on("receive_message", (msg: Message) => {
      if (msg.sender === "admin") {
        setMessages((prev) => [...prev, msg]);
      }
    });

    // Listen for admin status
    socket.on("admin_status", ({ online }: { online: boolean }) => {
      setAdminOnline(online);
    });

    // Listen for typing events
    socket.on("typing", ({ senderId }) => {
      if (senderId === "admin") {
        setIsTyping(true);
      }
    });

    socket.on("stop_typing", ({ senderId }) => {
      if (senderId === "admin") {
        setIsTyping(false);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (!socketRef.current) return;

    socketRef.current.emit("typing", {
      senderId: socketRef.current.id, // 👈 send actual socket.id
    });

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      socketRef.current?.emit("stop_typing", {
        senderId: socketRef.current.id,
      });
    }, 1000); // stop after 1s of inactivity
  };

  const sendMessage = () => {
    if (!input || !socketRef.current) return;

    const msg: Message = {
      sender: "client",
      content: input,
      timestamp: new Date().toISOString(),
    };

    socketRef.current.emit("send_message", msg);

    setMessages((prev) => [...prev, msg]);
    setInput("");
    socketRef.current.emit("stop_typing", {
      senderId: "client",
      receiverId: "admin",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-1">
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="bg-green-500 text-white p-2 rounded-full shadow-lg"
      >
        {collapsed ? <MessageCircle size={20} /> : <X size={20} />}
      </button>

      {/* Chat box */}
      {!collapsed && (
        <div className="mt-2 border rounded-lg shadow-lg bg-white flex flex-col h-80">
          <div className="bg-green-500 text-white p-2 rounded-t-lg flex justify-between items-center">
            <span>Chat with Admin</span>
            <span
              className={`text-xs font-semibold pl-2 ${
                adminOnline ? "text-blue-200" : "text-red-200"
              }`}
            >
              {adminOnline ? "Online" : "Offline"}
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-1 rounded max-w-[80%] ${
                  msg.sender === "client"
                    ? "bg-blue-100 ml-auto text-right"
                    : "bg-gray-100 mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && <TypingIndicator />}
          </div>

          {/* Input */}
          <div className="flex p-2 gap-1 border-t">
            <input
              className="flex-1 border rounded-full px-2 text-sm"
              placeholder="Type..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-full"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
