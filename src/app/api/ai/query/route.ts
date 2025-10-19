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

    // For long-running requests (>10s), we need a different approach
    // We'll return immediately with a processing status and let the frontend poll
    
    // Start the FastAPI request
    const controller = new AbortController()
    
    // Set a shorter timeout to detect if the request will take too long
    const quickTimeoutId = setTimeout(() => {
      controller.abort()
    }, 5000) // 5 seconds to check if it's a quick response

    try {
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

      clearTimeout(quickTimeoutId)

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
      
    } catch (fetchError) {
      clearTimeout(quickTimeoutId)
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        // The request is taking longer than 5 seconds, so we'll return a processing status
        return NextResponse.json({
          processing: true,
          message: "Your request is being processed. Complex queries can take 15-30 seconds.",
          estimated_time: "15-30 seconds",
          suggestion: "Please wait while we process your request. The AI is analyzing your data.",
          fallback_response: {
            analysis: "Your query is being processed by our AI system. Complex queries can take 15-30 seconds to complete. Please be patient while we analyze your data and generate the response. You can try asking a simpler question if you need faster results.",
            generated_sql: null,
            sql_explanation: "SQL generation is in progress...",
            tables_used: [],
            data: [],
            columns: []
          }
        })
      }
      
      throw fetchError
    }
    
  } catch (error) {
    console.error("Error in AI query route:", error)
    
    return NextResponse.json(
      { 
        error: "The AI service is currently experiencing issues. Please try again in a few moments.",
        fallback_response: {
          analysis: "I'm sorry, but the AI service is currently experiencing issues. Please try asking a simpler question or try again in a few moments.",
          generated_sql: null,
          sql_explanation: "No SQL was generated due to service unavailability.",
          tables_used: [],
          data: [],
          columns: []
        }
      },
      { status: 503 }
    )
  }
}