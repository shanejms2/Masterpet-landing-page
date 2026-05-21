import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { hasValidSessionToken } from '@/lib/session'

export interface User {
  username: string
  isAuthenticated: boolean
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session-token')
  
  if (!hasValidSessionToken(sessionToken?.value)) {
    return null
  }

  return {
    username: 'admin',
    isAuthenticated: true
  }
}

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return user
}

export async function login(username: string, password: string): Promise<boolean> {
  const adminUsername = process.env.ADMIN_USERNAME
  const adminPassword = process.env.ADMIN_PASSWORD
  
  if (username === adminUsername && password === adminPassword) {
    return true
  }
  
  return false
}