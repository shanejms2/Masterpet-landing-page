"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InvestmentData } from "@/lib/vennala-api"

interface InvestmentChartProps {
  data: InvestmentData[]
}

export function InvestmentPieChart({ data }: InvestmentChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  
  const totalInvestment = data.reduce((sum, inv) => sum + inv.balance, 0)
  
  const colors = [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444', // Red
  ]

  const chartData = data.map((investment, index) => ({
    name: investment.director_name,
    value: investment.balance,
    percentage: totalInvestment > 0 ? (investment.balance / totalInvestment) * 100 : 0,
    color: colors[index % colors.length],
  }))

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Investment Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Interactive Pie Chart Visualization */}
          <div className="flex-1">
            <div className="relative w-64 h-64 mx-auto">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {chartData.map((item, index) => {
                  const startAngle = chartData.slice(0, index).reduce((sum, d) => sum + (d.percentage * 3.6), 0)
                  const endAngle = startAngle + (item.percentage * 3.6)
                  
                  const startAngleRad = (startAngle * Math.PI) / 180
                  const endAngleRad = (endAngle * Math.PI) / 180
                  
                  const x1 = 50 + 40 * Math.cos(startAngleRad)
                  const y1 = 50 + 40 * Math.sin(startAngleRad)
                  const x2 = 50 + 40 * Math.cos(endAngleRad)
                  const y2 = 50 + 40 * Math.sin(endAngleRad)
                  
                  const largeArcFlag = item.percentage > 50 ? 1 : 0
                  
                  const pathData = [
                    `M 50 50`,
                    `L ${x1} ${y1}`,
                    `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                    'Z'
                  ].join(' ')
                  
                  const isHovered = hoveredSegment === index
                  const scale = isHovered ? 1.05 : 1
                  
                  return (
                    <g key={index}>
                      <path
                        d={pathData}
                        fill={item.color}
                        stroke="white"
                        strokeWidth="0.5"
                        opacity={isHovered ? 0.8 : 1}
                        style={{
                          transform: `scale(${scale})`,
                          transformOrigin: '50px 50px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-in-out'
                        }}
                        onMouseEnter={() => setHoveredSegment(index)}
                        onMouseLeave={() => setHoveredSegment(null)}
                      />
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
          
          {/* Interactive Legend */}
          <div className="flex-1 space-y-3">
            {chartData.map((item, index) => {
              const isHovered = hoveredSegment === index
              
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    isHovered ? 'bg-gray-700' : ''
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div 
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {formatCurrency(item.value)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">
                      {item.percentage.toFixed(1)}%
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function InvestmentBarChart({ data }: InvestmentChartProps) {
  const maxValue = Math.max(...data.map(d => d.balance))
  
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Investment by Director</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((investment, index) => {
            const percentage = maxValue > 0 ? (investment.balance / maxValue) * 100 : 0
            const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500']
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-sm">
                    {investment.director_name}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(investment.balance)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${colors[index % colors.length]} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
