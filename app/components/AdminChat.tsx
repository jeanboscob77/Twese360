"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MessageCircle, X } from "lucide-react";

interface Message {
  sender: "admin" | "client";
  clientId: string;
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

export default function AdminChat() {
  const [clients, setClients] = useState<string[]>([]);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Record<string, Message[]>>(
    {}
  );
  const [input, setInput] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  // --- typing state per client
  const [typingClients, setTypingClients] = useState<Record<string, boolean>>(
    {}
  );

  const socketRef = useRef<Socket | null>(null);
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socketRef.current = socket;

    socket.emit("admin_join");

    socket.on("client_list", (list: string[]) => setClients(list));

    socket.on("receive_message", (msg: Message) => {
      setConversations((prev) => {
        const prevMsgs = prev[msg.clientId] || [];
        return { ...prev, [msg.clientId]: [...prevMsgs, msg] };
      });

      // Update unread count if collapsed or different client
      if (collapsed || msg.clientId !== selectedClient) {
        setUnreadCount((c) => c + 1);
      }
    });

    // typing events from clients
    socket.on("typing", ({ senderId }) => {
      setTypingClients((prev) => ({ ...prev, [senderId]: true }));
    });

    socket.on("stop_typing", ({ senderId }) => {
      setTypingClients((prev) => ({ ...prev, [senderId]: false }));
    });

    return () => {
      socket.disconnect(); // clean up
    };
  }, []); // <-- run only once on mount

  const sendMessage = () => {
    if (!input || !selectedClient || !socketRef.current) return;

    const msg: Message = {
      sender: "admin",
      clientId: selectedClient,
      content: input,
      timestamp: new Date().toISOString(),
    };

    socketRef.current.emit("send_message", msg);

    setConversations((prev) => {
      const prevMsgs = prev[selectedClient] || [];
      return { ...prev, [selectedClient]: [...prevMsgs, msg] };
    });

    setInput("");
  };
  const selectClient = (clientId: string) => {
    setSelectedClient(clientId);

    // Reset unread count for this client
    setUnreadCount(0);
  };

  let typingTimeout: NodeJS.Timeout;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (!socketRef.current || !selectedClient) return;

    socketRef.current.emit("typing", {
      senderId: "admin",
      receiverId: selectedClient,
    });

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      socketRef.current?.emit("stop_typing", {
        senderId: "admin",
        receiverId: selectedClient,
      });
    }, 1000); // stop after 1s of no typing
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-1">
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="relative bg-green-500 text-white p-2 rounded-full shadow-lg"
      >
        {collapsed ? <MessageCircle size={20} /> : <X size={20} />}
        {collapsed && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat box */}
      {!collapsed && (
        <div className="mt-1 border rounded-xl shadow-lg flex flex-col h-[28rem] w-80 bg-white">
          <div className="bg-green-500 text-white p-2 rounded-t-xl flex justify-between items-center">
            <span>Admin Chat</span>
          </div>

          {/* Clients */}
          <div className="flex-1 overflow-y-auto p-2 border-b text-sm">
            <div className="font-semibold mb-2">Clients</div>
            {clients.map((c) => (
              <div
                key={c}
                className={`p-1 mb-1 rounded cursor-pointer ${
                  selectedClient === c ? "bg-green-200" : "bg-gray-100"
                }`}
                onClick={() => selectClient(c)}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 text-sm">
            {selectedClient &&
              (conversations[selectedClient] || []).map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-2 rounded-lg ${
                    msg.sender === "admin"
                      ? "bg-green-100 self-end ml-auto"
                      : "bg-gray-200 self-start"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            {/* typing indicator */}
            {selectedClient && typingClients[selectedClient] && (
              <TypingIndicator />
            )}
          </div>

          {/* Input */}
          {selectedClient && (
            <div className="flex p-2 border-t gap-1">
              <input
                className="flex-1 border rounded-full px-3 py-1 text-sm"
                placeholder="Message..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
