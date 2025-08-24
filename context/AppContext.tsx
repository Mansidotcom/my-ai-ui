// context/AppContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Model = { id: string; name: string; description?: string };
export type Template = { id: string; title: string; prompt: string };

type AppContextType = {
  theme: 'light'|'dark';
  toggleTheme: () => void;
  models: Model[];
  templates: Template[];
  setTemplates: (t: Template[]) => void;
  loading: { models: boolean; templates: boolean };
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'light'|'dark'>(() => (typeof window !== 'undefined' && (localStorage.getItem('theme') as 'light'|'dark')) || 'light');
  const [models, setModels] = useState<Model[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState({ models: true, templates: true });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    fetch('/api/models').then(r => r.json()).then(data => { setModels(data); setLoading(s => ({...s, models:false})); }).catch(()=>setLoading(s=>({...s, models:false})));
    fetch('/api/templates').then(r => r.json()).then(data => { setTemplates(data); setLoading(s => ({...s, templates:false})); }).catch(()=>setLoading(s=>({...s, templates:false})));
  }, []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light'), models, templates, setTemplates, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
