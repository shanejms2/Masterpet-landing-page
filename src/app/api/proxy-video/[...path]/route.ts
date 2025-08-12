import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const pathString = path.join('/');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    
    if (!supabaseUrl) {
      return new NextResponse('Supabase URL not configured', { status: 500 });
    }

    // Construct the full Supabase storage URL
    const videoUrl = `${supabaseUrl}/storage/v1/object/public/masterpet-landingpage-videos/${pathString}`;

    // Fetch the video from Supabase
    const response = await fetch(videoUrl);

    if (!response.ok) {
      return new NextResponse('Video not found', { status: 404 });
    }

    // Get the video content
    const videoBuffer = await response.arrayBuffer();

    // Create response with proper cache headers
    const headers = new Headers();
    headers.set('Content-Type', response.headers.get('Content-Type') || 'video/mp4');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year cache
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Length', response.headers.get('Content-Length') || '');
    
    // Copy other relevant headers
    if (response.headers.get('Accept-Ranges')) {
      headers.set('Accept-Ranges', response.headers.get('Accept-Ranges')!);
    }

    return new NextResponse(videoBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Video proxy error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

// Handle HEAD requests for video metadata
export async function HEAD(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const pathString = path.join('/');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    
    if (!supabaseUrl) {
      return new NextResponse('Supabase URL not configured', { status: 500 });
    }

    const videoUrl = `${supabaseUrl}/storage/v1/object/public/masterpet-landingpage-videos/${pathString}`;
    const response = await fetch(videoUrl, { method: 'HEAD' });

    if (!response.ok) {
      return new NextResponse('Video not found', { status: 404 });
    }

    const headers = new Headers();
    headers.set('Content-Type', response.headers.get('Content-Type') || 'video/mp4');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Content-Length', response.headers.get('Content-Length') || '');
    
    if (response.headers.get('Accept-Ranges')) {
      headers.set('Accept-Ranges', response.headers.get('Accept-Ranges')!);
    }

    return new NextResponse(null, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Video proxy HEAD error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
