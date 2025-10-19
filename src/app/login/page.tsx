import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 md:p-10" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Masterpet</h1>
          <p className="text-gray-400">Admin Dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
