"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={handleLogout}
      className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}
