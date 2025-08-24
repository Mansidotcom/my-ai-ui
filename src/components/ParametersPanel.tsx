"use client";
import { useState } from "react";

export default function ParametersPanel() {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(200);

  return (
    <div className="space-y-4">
      <div>
        <label>Temperature: {temperature}</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      <div>
        <label>Max Tokens: {maxTokens}</label>
        <input
          type="number"
          value={maxTokens}
          onChange={(e) => setMaxTokens(parseInt(e.target.value))}
          className="w-full p-1 rounded border dark:bg-gray-800"
        />
      </div>
    </div>
  );
}
