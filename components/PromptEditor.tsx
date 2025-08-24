import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const PromptEditor: React.FC<{onSend:(p:string)=>void}> = ({onSend}) => {
  const [val, setVal] = useState('');
  const { templates, setTemplates } = useApp();

  async function saveTemplate() {
    const res = await fetch('/api/templates', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title: 'Saved', prompt: val })});
    const t = await res.json();
    setTemplates(prev => [...prev, t]);
    alert('Template saved');
  }

  return (
    <form onSubmit={e => { e.preventDefault(); onSend(val); setVal(''); }}>
      <textarea aria-label="Prompt editor" value={val} onChange={e=>setVal(e.target.value)} className="w-full p-3 rounded-lg border min-h-[120px]" placeholder="Type prompt..." />
      <div className="flex gap-2 mt-2">
        <button type="submit" className="px-4 py-2 rounded bg-purple-600 text-white">Send</button>
        <button type="button" onClick={saveTemplate} className="px-3 py-2 rounded border">Save Template</button>
        <select onChange={e => {
            const t = templates.find(t => t.id === e.target.value);
            if (t) setVal(t.prompt);
          }} className="ml-auto">
          <option value="">Load template</option>
          {templates.map(t => <option value={t.id} key={t.id}>{t.title}</option>)}
        </select>
      </div>
    </form>
  );
};
