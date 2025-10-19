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

    // Make request to FastAPI with Vercel-compatible timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout (Vercel limit is 10s)

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
        { 
          error: "Request timed out. The AI service is taking too long to respond. Please try again with a simpler query.",
          fallback_response: {
            analysis: "I'm sorry, but the AI service is currently experiencing high load and is taking longer than usual to respond. Please try asking a simpler question or try again in a few moments.",
            generated_sql: null,
            sql_explanation: "No SQL was generated due to timeout.",
            tables_used: [],
            data: [],
            columns: []
          }
        },
        { status: 408 }
      )
    }
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}

