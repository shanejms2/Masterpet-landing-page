"use client"

import { Home, Store, Bot } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import ErpnextConnectionCard from "@/components/ErpnextConnectionCard"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Vennala Store",
    url: "/dashboard/vennala-store",
    icon: Store,
  },
  {
    title: "Ask AI",
    url: "/dashboard/ask-ai",
    icon: Bot,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-900 border-r border-gray-800">
      <SidebarHeader className="border-b border-gray-800 h-12">
        <div className="flex items-center h-full">
          <h1 className="text-xl font-semibold text-white">Masterpet</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gray-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs font-medium uppercase tracking-wider px-3 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-gray-300 hover:text-white hover:bg-gray-800 rounded-md mx-2">
                    <a href={item.url} className="flex items-center space-x-3 px-3 py-2">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-2">
          <ErpnextConnectionCard variant="compact" />
        </div>
      </SidebarContent>
    </Sidebar>
  )
}

