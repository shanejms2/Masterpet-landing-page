import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt, execute = true, analyze = true, include_data = true, max_rows = 10 } = body

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      )
    }

    const fastApiUrl = process.env.FASTAPI_URL
    const fastApiKey = process.env.FASTAPI_API_KEY

    if (!fastApiUrl || !fastApiKey) {
      return NextResponse.json(
        { error: "FastAPI configuration is missing" },
        { status: 500 }
      )
    }

    // Make request to FastAPI with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    const response = await fetch(`${fastApiUrl}/api/v1/ai/query`, {
      method: "POST",
      headers: {
        "X-API-Key": fastApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        execute,
        analyze,
        include_data,
        max_rows,
      }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("FastAPI error:", errorText)
      return NextResponse.json(
        { error: `FastAPI request failed: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in AI query route:", error)
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: "Request timed out. The AI service is taking too long to respond. Please try again with a simpler query." },
        { status: 408 }
      )
    }
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}

