import React from 'react';

export type Message = { id:string; role:'user'|'assistant'; text:string };

export const ChatArea: React.FC<{messages:Message[]}> = ({messages}) => {
  function download(m: Message) {
    const blob = new Blob([JSON.stringify(m, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `message-${m.id}.json`; a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div role="log" aria-live="polite" className="space-y-3">
      {messages.map(m => (
        <div key={m.id} className={`p-3 rounded-lg ${m.role === 'assistant' ? 'bg-gray-100' : 'bg-purple-50'}`}>
          <div className="whitespace-pre-wrap">{m.text}</div>
          <div className="flex gap-2 mt-2">
            <button onClick={() => navigator.clipboard.writeText(m.text)} className="text-sm">Copy</button>
            <button onClick={() => download(m)} className="text-sm">Download JSON</button>
          </div>
        </div>
      ))}
    </div>
  );
};
