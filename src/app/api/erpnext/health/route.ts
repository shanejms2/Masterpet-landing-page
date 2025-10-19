import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const fastApiUrl = process.env.FASTAPI_URL;
    const fastApiKey = process.env.FASTAPI_API_KEY;

    if (!fastApiUrl || !fastApiKey) {
      return NextResponse.json(
        { 
          connected: false, 
          error: 'FastAPI configuration missing (FASTAPI_URL or FASTAPI_API_KEY)' 
        }, 
        { status: 500 }
      );
    }

    // Call FastAPI backend
    const response = await fetch(`${fastApiUrl}/api/v1/database/status`, {
      method: 'GET',
      headers: {
        'X-API-Key': fastApiKey,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { 
          connected: false, 
          error: `FastAPI returned ${response.status}: ${response.statusText}` 
        }, 
        { status: 503 }
      );
    }

    const data = await response.json();

    // Transform FastAPI response to match expected format
    if (data.status === 'connected') {
      return NextResponse.json(
        { 
          connected: true, 
          version: data.message || 'Connected via FastAPI' 
        }, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          connected: false, 
          error: data.message || 'Database connection failed' 
        }, 
        { status: 503 }
      );
    }
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    return NextResponse.json({ connected: false, error: message }, { status: 500 });
  }
}


