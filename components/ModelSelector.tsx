import React from 'react';
import { useApp } from '../context/AppContext';

export const ModelSelector: React.FC<{value:string; onChange:(v:string)=>void}> = ({value, onChange}) => {
  const { models, loading } = useApp();
  if (loading.models) return <div className="p-4 animate-pulse h-10 bg-gray-200 rounded" />;
  return (
    <div className="p-3">
      <label className="block text-sm mb-1">Model</label>
      <select className="w-full p-2 rounded border" value={value} onChange={e=>onChange(e.target.value)}>
        {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
      </select>
    </div>
  );
};
