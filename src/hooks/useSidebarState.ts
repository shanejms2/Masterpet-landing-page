"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"

export function useSidebarState() {
  const { state, isMobile } = useSidebar()
  const [isTablet, setIsTablet] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
      }
    }

    checkScreenSize()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return {
    isSidebarExpanded: state === "expanded",
    isMobile,
    isTablet,
    isMounted
  }
}
