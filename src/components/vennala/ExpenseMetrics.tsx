"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"

interface ExpenseData {
  expense_account: string;
  total_expense: number;
  transaction_count: number;
}

interface ExpenseMetricsProps {
  data: ExpenseData[]
  totalExpenses: number
}

export function ExpenseMetrics({ data, totalExpenses }: ExpenseMetricsProps) {
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
      {/* Total Expenses Card */}
      <Card className="bg-gradient-to-br from-red-600 to-red-700 border-red-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-100">
            Total Expenses
          </CardTitle>
          <DollarSign className="h-4 w-4 text-red-200" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">
            {formatCurrency(totalExpenses)}
          </div>
          <p className="text-xs text-red-200 mt-1">
            Across {data.length} accounts
          </p>
        </CardContent>
      </Card>

    </div>
  )
}

export function ExpenseBreakdown({ data }: { data: ExpenseData[] }) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getAccountCategory = (account: string) => {
    if (account.toLowerCase().includes('rent')) return 'Rent'
    if (account.toLowerCase().includes('salary') || account.toLowerCase().includes('wage')) return 'Salaries'
    if (account.toLowerCase().includes('electricity') || account.toLowerCase().toLowerCase().includes('power')) return 'Utilities'
    if (account.toLowerCase().includes('maintenance') || account.toLowerCase().includes('repair')) return 'Maintenance'
    if (account.toLowerCase().includes('marketing') || account.toLowerCase().includes('advertisement')) return 'Marketing'
    if (account.toLowerCase().includes('transport') || account.toLowerCase().includes('fuel')) return 'Transport'
    if (account.toLowerCase().includes('supplies') || account.toLowerCase().includes('stationery')) return 'Supplies'
    return 'Other'
  }

  const getPercentage = (amount: number, total: number) => {
    return total > 0 ? ((amount / total) * 100).toFixed(1) : 0
  }

  const totalExpenses = data.reduce((sum, exp) => sum + exp.total_expense, 0)

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">
          Expense Breakdown by Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((expense, index) => {
            // Remove '- MP' suffix from account names
            const cleanAccountName = expense.expense_account.replace(/\s*-\s*MP\s*$/, '')
            
            return (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {getAccountCategory(cleanAccountName).charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{cleanAccountName}</p>
                  <p className="text-gray-400 text-sm">
                    {getAccountCategory(cleanAccountName)} • {expense.transaction_count} transactions
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-lg">
                  {formatCurrency(expense.total_expense)}
                </p>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  {getPercentage(expense.total_expense, totalExpenses)}%
                </Badge>
              </div>
            </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
