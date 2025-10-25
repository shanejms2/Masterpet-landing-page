"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

interface CombinedMetricsProps {
  totalInvestment: number
  totalExpenses: number
  investmentCount: number
  expenseCount: number
}

export function CombinedMetrics({ 
  totalInvestment, 
  totalExpenses, 
  investmentCount
}: CombinedMetricsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const remainingBalance = totalInvestment - totalExpenses
  const usedPercentage = totalInvestment > 0 ? (totalExpenses / totalInvestment) * 100 : 0
  const remainingPercentage = 100 - usedPercentage

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Total Investment Card */}
      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-100">
            Total Investment
          </CardTitle>
          <DollarSign className="h-4 w-4 text-blue-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">
            {formatCurrency(totalInvestment)}
          </div>
          <p className="text-xs text-blue-200 mt-1">
            From {investmentCount} directors
          </p>
        </CardContent>
      </Card>

      {/* Total Expenses Card */}
      <Card className="bg-gradient-to-br from-red-600 to-red-700 border-red-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-100">
            Used Amount
          </CardTitle>
          <DollarSign className="h-4 w-4 text-red-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">
            {formatCurrency(totalExpenses)}
          </div>
          <p className="text-xs text-red-200 mt-1">
            {usedPercentage.toFixed(1)}% of investment
          </p>
        </CardContent>
      </Card>

      {/* Remaining Balance Card */}
      <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-100">
            Remaining Balance
          </CardTitle>
          <DollarSign className="h-4 w-4 text-green-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">
            {formatCurrency(remainingBalance)}
          </div>
          <p className="text-xs text-green-200 mt-1">
            {remainingPercentage.toFixed(1)}% available
          </p>
        </CardContent>
      </Card>

    </div>
  )
}
