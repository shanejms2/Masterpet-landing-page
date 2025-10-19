import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('job_id')

    if (!jobId) {
      return NextResponse.json(
        { error: "Job ID is required" },
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

    // Check job status
    const response = await fetch(`${fastApiUrl}/api/v1/ai/query/status/${jobId}`, {
      method: "GET",
      headers: {
        "X-API-Key": fastApiKey,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("FastAPI status check error:", errorText)
      return NextResponse.json(
        { error: `Status check failed: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
    
  } catch (error) {
    console.error("Error in AI status route:", error)
    
    return NextResponse.json(
      { 
        error: "Failed to check job status. Please try again.",
      },
      { status: 500 }
    )
  }
}
