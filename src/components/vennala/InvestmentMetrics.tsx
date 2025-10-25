"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"
import { InvestmentData } from "@/lib/vennala-api"

interface InvestmentMetricsProps {
  data: InvestmentData[]
  totalInvestment: number
}

export function InvestmentMetrics({ data, totalInvestment }: InvestmentMetricsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid grid-cols-1 gap-6">
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
            From {data.length} directors
          </p>
        </CardContent>
      </Card>

    </div>
  )
}

export function InvestmentBreakdown({ data }: { data: InvestmentData[] }) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getDirectorInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const getPercentage = (amount: number, total: number) => {
    return total > 0 ? ((amount / total) * 100).toFixed(1) : 0
  }

  const totalInvestment = data.reduce((sum, inv) => sum + inv.balance, 0)

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">
          Investment Breakdown by Director
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((investment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {getDirectorInitials(investment.director_name)}
                </div>
                <div>
                  <p className="text-white font-medium">{investment.director_name}</p>
                  <p className="text-gray-400 text-sm">{investment.account_name.replace(/\s*-\s*MP\s*$/, '')}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-lg">
                  {formatCurrency(investment.balance)}
                </p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {getPercentage(investment.balance, totalInvestment)}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
