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

export default function ClientChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const socketRef = useRef<Socket | null>(null);
  const [adminOnline, setAdminOnline] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:5000");
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

    return () => {
      socket.disconnect();
    };
  }, []);

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
          <div className="bg-green-500 text-white p-2 rounded-t-lg">
            <span>Chat with Admin</span>
            <span
              className={`text-xs font-semibold pl-2 ${
                adminOnline ? "text-blue-500" : "text-red-500"
              }`}
            >
              {adminOnline ? "Online" : "Offline"}
            </span>
          </div>

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
          </div>

          <div className="flex p-2 gap-1 border-t">
            <input
              className="flex-1 border rounded-full px-2 text-sm"
              placeholder="Type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
