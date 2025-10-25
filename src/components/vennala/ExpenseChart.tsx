"use client"

import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { useSidebarState } from "@/hooks/useSidebarState"

interface ExpenseData {
  expense_account: string;
  total_expense: number;
  transaction_count: number;
}

interface ExpenseHorizontalBarChartProps {
  data: ExpenseData[]
}

export function ExpenseHorizontalBarChart({ data }: ExpenseHorizontalBarChartProps) {
  const { isSidebarExpanded, isMobile, isTablet, isMounted } = useSidebarState()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Sort data by amount descending for better visualization
  const sortedData = [...data].sort((a, b) => b.total_expense - a.total_expense)

  const chartData = sortedData.map((expense) => {
    // Remove '- MP' suffix from account names
    const cleanAccountName = expense.expense_account.replace(/\s*-\s*MP\s*$/, '')
    
    return {
      account: !isMounted 
        ? (cleanAccountName.length > 15 ? cleanAccountName.substring(0, 15) + '...' : cleanAccountName)
        : isMobile 
          ? (cleanAccountName.length > 12 
              ? cleanAccountName.substring(0, 12) + '...' 
              : cleanAccountName)
          : isTablet 
            ? (cleanAccountName.length > (isSidebarExpanded ? 10 : 14) 
                ? cleanAccountName.substring(0, isSidebarExpanded ? 10 : 14) + '...' 
                : cleanAccountName)
            : (cleanAccountName.length > (isSidebarExpanded ? 12 : 18) 
                ? cleanAccountName.substring(0, isSidebarExpanded ? 12 : 18) + '...' 
                : cleanAccountName), // Responsive truncation based on sidebar state
      amount: Math.max(expense.total_expense, 1000), // Minimum 1000 for visibility
      originalAmount: expense.total_expense,
      transactions: expense.transaction_count,
      fullName: cleanAccountName, // Use cleaned name for tooltips too
      // Calculate dynamic positioning based on text length
      accountLength: cleanAccountName.length,
      amountLength: formatCurrency(expense.total_expense).length,
    }
  })

  const chartConfig = {
    amount: {
      label: "Expense Amount",
      color: "#ef4444",
    },
    label: {
      color: "#ffffff",
    },
  } satisfies ChartConfig

  const totalExpenses = data.reduce((sum, expense) => sum + expense.total_expense, 0)
  const avgExpense = totalExpenses / data.length || 0

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-white text-lg sm:text-xl">Expense Distribution</CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">Vennala Store Expenses by Account</CardDescription>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <div className="w-full max-w-full">
          <ChartContainer config={chartConfig} className="h-[500px] sm:h-[600px] lg:h-[700px] w-full max-w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
              margin={{
                top: 20,
                right: 20,
                left: !isMounted ? 200 : isMobile ? 120 : isTablet ? (isSidebarExpanded ? 120 : 160) : (isSidebarExpanded ? 140 : 200),
                bottom: 60,
              }}
            barCategoryGap="15%"
          >
            <CartesianGrid horizontal={false} stroke="#374151" />
            <YAxis
              dataKey="account"
              type="category"
              tickLine={false}
              tickMargin={15}
              axisLine={false}
              tickFormatter={(value) => value}
              width={!isMounted ? 180 : isMobile ? 100 : isTablet ? (isSidebarExpanded ? 100 : 140) : (isSidebarExpanded ? 120 : 180)}
              stroke="#ffffff"
              fontSize={!isMounted ? 10 : isMobile ? 9 : 10}
            />
            <XAxis 
              dataKey="amount" 
              type="number" 
              stroke="#ffffff"
              fontSize={!isMounted ? 10 : isMobile ? 8 : 10}
              tickFormatter={(value) => formatCurrency(value)}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg">
                      <p className="text-white font-medium">{data.fullName}</p>
                      <p className="text-red-400">
                        Amount: {formatCurrency(data.originalAmount)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Transactions: {data.transactions}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="amount"
              layout="vertical"
              fill="var(--color-amount)"
              radius={4}
            />
          </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-xs sm:text-sm">
        <div className="flex gap-2 leading-none font-medium text-white">
          Total Expenses: {formatCurrency(totalExpenses)} <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>
        <div className="text-gray-400 leading-none">
          Average per account: {formatCurrency(avgExpense)}
        </div>
      </CardFooter>
    </Card>
  )
}

