"use client";
import { useEffect, useState } from "react";

type Template = {
  id: number;
  name: string;
  prompt: string;
};

export default function PromptEditor() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [_selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data: Template[]) => setTemplates(data));
  }, []);

  const handleLoad = (id: number) => {
    const t = templates.find((tpl) => tpl.id === id);
    if (t) {
      setSelected(t.name);
      setPrompt(t.prompt);
    }
  };  

const handleSave = async (val: string) => {
  const res = await fetch("/api/templates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Saved", prompt: val }),
  });
  const t: Template = await res.json(); // ✅ type fix
  setTemplates((prev: Template[]) => [...prev, t]); // ✅ type fix
  alert("Template saved");
};


  return (
    <div className="p-4 border rounded-lg dark:bg-gray-900 bg-gray-100">
      <label className="block mb-2 text-sm font-medium">Prompt Editor</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 rounded dark:bg-gray-800"
        rows={4}
        placeholder="Write your custom prompt..."
      />

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleSave(prompt)}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          Save
        </button>
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => handleLoad(tpl.id)}
            className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
          >
            Load {tpl.name}
          </button>
        ))}
      </div>
    </div>
  );
}
