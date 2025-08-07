import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const model = gemini.getGenerativeModel({ model: "gemini-pro" });

    // Step 1: Ask Gemini for explanation and image prompt
    const result = await model.generateContent([
      {
        text: `Explain the topic "${prompt}" in a simple, student-friendly way. Also, generate a separate visual prompt (like a flowchart or mind map) for rendering an AI-based diagram.`,
      },
    ]);

    const geminiResponse = await result.response;
    const fullText = geminiResponse.text();

    // Step 2: Split explanation and image prompt
    const [explanation, imagePrompt] = fullText.split("Visual Prompt:");

    if (!imagePrompt) {
      return NextResponse.json({ error: "Could not extract visual prompt." }, { status: 400 });
    }

    // Step 3: Send image prompt to Stability AI
    const stabilityResponse = await fetch("https://api.stability.ai/v2beta/stable-image/generate/core", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        prompt: imagePrompt.trim(),
        output_format: "png",
      }),
    });

    if (!stabilityResponse.ok) {
      const errText = await stabilityResponse.text();
      throw new Error("Stability AI Error: " + errText);
    }

    const imageData = await stabilityResponse.json();

    return NextResponse.json({
      explanation: explanation.trim(),
      image: `data:image/png;base64,${imageData.image}`,
    });
  } catch (error) {
    console.error("StudyAssist Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
