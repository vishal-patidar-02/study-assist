import { NextRequest, NextResponse } from "next/server";
import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({
  token: process.env.CO_API_KEY as string,
});

export async function POST(req: NextRequest) {
  const { prompt }: { prompt: string } = await req.json();
  console.log("User Prompt:", prompt);

  try {
    // Step 1: Ask Cohere for explanation + visual prompt
    const chatResponse = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: `Explain the topic "${prompt}" in a simple, student-friendly way.
          
          After the explanation, write exactly: "Visual Prompt:" followed by a short, clear description of a diagram that represents the concept.
          
          The diagram should be described in plain language, like:
          - "A mind map showing main idea in the center and 3-4 branches with key points"
          - "A flowchart with arrows showing steps in the process"
          - "A simple labeled diagram highlighting the main parts"
          
          Keep the visual prompt concise and directly usable for generating an image.`
        },
      ]

    });

    // Extract the text from the content array, filtering for items with a 'text' property
    const fullText: string = (chatResponse.message?.content
      ?.map(item => 'text' in item ? (item as { text: string }).text : '')
      .join(' ')
      .trim() || "");
    console.log("Cohere Output:", fullText);

    // Step 2: Split explanation and image prompt
    const [explanation, imagePrompt] = fullText.split("Visual Prompt:");

    if (!imagePrompt) {
      return NextResponse.json(
        { error: "Could not extract visual prompt." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      explanation: explanation.trim(),
      visualPrompt: imagePrompt.trim(),
    });
  } catch (error) {
    console.error("StudyAssist Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
