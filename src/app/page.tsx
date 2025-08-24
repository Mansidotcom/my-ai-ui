import ModelSelector from "@/components/ModelSelector";
import ParametersPanel from "@/components/ParametersPanel";
import ChatArea from "@/components/ChatArea";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-bold">⚡ AI Playground</h1>
          <ThemeToggle />
        </header>

        {/* Layout */}
        <main className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 p-4 border-r space-y-6">
            <ModelSelector />
            <ParametersPanel />
          </aside>

          {/* Chat Area */}
          <section className="flex-1 p-4">
            <ChatArea />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
