"use client"

import { useEffect, useState } from "react"
import { InvestmentPieChart, InvestmentBarChart } from "@/components/vennala/InvestmentChart"
import { ExpenseBreakdown } from "@/components/vennala/ExpenseMetrics"
import { ExpenseHorizontalBarChart } from "@/components/vennala/ExpenseChart"
import { CombinedMetrics } from "@/components/vennala/CombinedMetrics"
import { vennalaAPI, VennalaMetrics } from "@/lib/vennala-api"
import { RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VennalaStorePage() {
  const [metrics, setMetrics] = useState<VennalaMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMetrics = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await vennalaAPI.getAllVennalaData()
      setMetrics(data)
    } catch (err) {
      console.error('Error fetching metrics:', err)
      setError('Failed to load investment and expense data. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMetrics()
  }, [])

  if (loading) {
    return (
      <div className="p-6 bg-gray-900 text-white">
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-300">Loading investment and expense data...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-900 text-white">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Error Loading Data</h3>
            <p className="text-gray-400 mb-4">{error}</p>
            <Button onClick={fetchMetrics} className="bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Vennala Store Dashboard</h1>
        <Button 
          onClick={fetchMetrics} 
          variant="outline" 
          className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Combined Metrics Cards */}
      {metrics && (
        <>
              <CombinedMetrics
                totalInvestment={metrics.investment.totalInvestment}
                totalExpenses={metrics.expenses.totalExpenses}
                investmentCount={metrics.investment.investments.length}
                expenseCount={metrics.expenses.expenses.length}
              />

          {/* Investment Charts Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Investment Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InvestmentPieChart data={metrics.investment.investments} />
              <InvestmentBarChart data={metrics.investment.investments} />
            </div>
          </div>

          {/* Expense Charts Section */}
          <div className="mb-8">
            <ExpenseHorizontalBarChart data={metrics.expenses.expenses} />
          </div>

          {/* Expense Breakdown */}
          <div className="mb-8">
            <ExpenseBreakdown data={metrics.expenses.expenses} />
          </div>

        </>
      )}
    </div>
  )
}