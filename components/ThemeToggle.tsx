import React from 'react';
import { useApp } from '../context/AppContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useApp();
  return (
    <button aria-pressed={theme === 'dark'} onClick={toggleTheme} className="p-2 rounded border">
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
