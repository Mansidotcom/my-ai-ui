"use client";
import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages: Message[] = [
      ...messages,
      { role: "user", text: input },
      { role: "ai", text: `(AI response to ${JSON.stringify(input)})` },
    ];
    setMessages(newMessages);
    setInput("");
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-history.json";
    a.click();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            <strong>{msg.role.toUpperCase()}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Input + Buttons */}
      <div className="flex gap-2 p-2 border-t">
        <input
          className="flex-1 p-2 rounded border dark:bg-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button
          onClick={sendMessage}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Send
        </button>
        <button
          onClick={downloadJSON}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Download JSON
        </button>
      </div>
    </div>
  );
}
