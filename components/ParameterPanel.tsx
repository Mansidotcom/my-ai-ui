import React from 'react';

export type Params = { temperature:number; maxTokens:number };

export const ParametersPanel: React.FC<{params:Params; onChange:(p:Params)=>void}> = ({params, onChange}) => {
  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block text-sm">Temperature: {params.temperature.toFixed(2)}</label>
        <input type="range" min={0} max={1} step={0.01} value={params.temperature} onChange={e => onChange({...params, temperature: parseFloat(e.target.value)})} />
      </div>
      <div>
        <label className="block text-sm">Max tokens</label>
        <input type="number" value={params.maxTokens} onChange={e => onChange({...params, maxTokens: Number(e.target.value)})} className="w-full p-2 rounded border" />
      </div>
    </div>
  );
};
