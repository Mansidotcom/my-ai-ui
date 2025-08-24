"use client";
import { useEffect, useState } from "react";

type Model = {
  id: string;
  name: string;
};

export default function ModelSelector() {
  const [models, setModels] = useState<Model[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("/api/models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setSelected(data[0]?.id || "");
      });
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Select Model</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 rounded border dark:bg-gray-800"
      >
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
