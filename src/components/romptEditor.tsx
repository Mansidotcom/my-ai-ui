"use client";
import { useState } from "react";

export default function PromptEditor({ onSend }: { onSend: (text: string) => void }) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex flex-col space-y-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt..."
        className="w-full p-2 rounded border dark:bg-gray-800"
      />
      <button
        onClick={() => {
          if (prompt.trim()) {
            onSend(prompt);
            setPrompt("");
          }
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
}
