"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? " Light" : "🌙 Dark"}
    </button>
  );
}
