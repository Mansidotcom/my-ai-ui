import { NextResponse } from "next/server";

export async function GET() {
  const models = [
    { id: "gpt-3.5", name: "GPT-3.5" },
    { id: "gpt-4", name: "GPT-4" },
    { id: "custom-ai", name: "Custom-AI" },
  ];

  return NextResponse.json(models);
}
