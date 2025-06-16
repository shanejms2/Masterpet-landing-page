import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const from_date = req.nextUrl.searchParams.get('from_date');
  const to_date = req.nextUrl.searchParams.get('to_date');
  const apiKey = process.env.NEXT_PUBLIC_MASTERPET_API_KEY;

  if (!from_date || !to_date) {
    return NextResponse.json({ error: 'Missing from_date or to_date' }, { status: 400 });
  }
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not set' }, { status: 500 });
  }

  const url = `https://erp.masterpet.co.in/api/method/petcare.api.landing_page_api.service_requests.get_service_requests?from_date=${from_date}&to_date=${to_date}`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-API-Key': apiKey,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    let errorMessage = 'Failed to fetch';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      errorMessage = (error as { message: string }).message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 