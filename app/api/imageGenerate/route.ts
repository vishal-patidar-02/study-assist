import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { visualPrompt }: { visualPrompt: string } = await req.json();

    if (!visualPrompt) {
      return NextResponse.json(
        { error: "Image prompt is required" },
        { status: 400 }
      );
    }

    // Build Pollinations image URL
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      visualPrompt
    )}?width=512&height=512&nologo=true`;

    // No need to fetch – just return the URL
    return NextResponse.json({ image: imageUrl });
  } catch (error) {
    console.error("Pollinations Image Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate image with Pollinations" },
      { status: 500 }
    );
  }
}
