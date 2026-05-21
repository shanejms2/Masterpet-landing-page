import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { login } from '@/lib/auth'
import { createSessionToken } from '@/lib/session'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    const isValid = await login(username, password)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const sessionToken = createSessionToken()
    if (!sessionToken) {
      return NextResponse.json(
        { error: 'Session secret is not configured' },
        { status: 500 }
      )
    }
    
    const cookieStore = await cookies()
    cookieStore.set('session-token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}