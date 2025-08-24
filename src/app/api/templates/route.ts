import { NextResponse } from "next/server";

export async function GET() {
  const templates = [
    { id: 1, name: "Chatbot", prompt: "You are a helpful assistant." },
    { id: 2, name: "Summarizer", prompt: "Summarize the given text in short." },
    { id: 3, name: "Code Helper", prompt: "Help me write clean JavaScript code." },
  ];

  return NextResponse.json(templates);
}
