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
      className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 shadow-sm transition-all duration-200 font-medium"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  )
}
