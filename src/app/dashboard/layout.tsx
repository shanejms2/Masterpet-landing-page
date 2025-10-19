import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { requireAuth } from "@/lib/auth"
import { LogoutButton } from "@/components/LogoutButton"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This will redirect to /login if not authenticated
  await requireAuth()

  return (
    <div className="min-h-screen bg-gray-900" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full bg-gray-900">
          <div className="flex items-center justify-between p-2 border-b border-gray-800 bg-gray-900 h-12">
            <SidebarTrigger className="text-gray-300 hover:text-white hover:bg-gray-800" />
            <div className="flex items-center space-x-4">
              <LogoutButton />
            </div>
          </div>
          <div className="bg-gray-900 text-white">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
