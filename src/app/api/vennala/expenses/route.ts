import { NextResponse } from "next/server"
import { requireApiAuth } from "@/lib/api-auth"

export async function GET() {
  const unauthorized = await requireApiAuth()
  if (unauthorized) return unauthorized

  try {
    const fastApiUrl = process.env.FASTAPI_URL || 'http://167.235.23.131:8000'
    const fastApiKey = process.env.FASTAPI_API_KEY

    if (!fastApiKey) {
      return NextResponse.json(
        { error: "FastAPI API key is not configured" },
        { status: 500 }
      )
    }

    // Query to get expense data for Vennala Store cost center
    const query = `
      SELECT 
        account as expense_account,
        ABS(SUM(debit) - SUM(credit)) as total_expense,
        COUNT(*) as transaction_count
      FROM \`tabGL Entry\`
      WHERE cost_center = 'Vennala Store - MP'
        AND (debit > 0 OR credit > 0)
        AND account NOT LIKE '%Loan%'
        AND account NOT LIKE '%Director%'
      GROUP BY account
      HAVING total_expense > 0
      ORDER BY total_expense DESC
    `

    const response = await fetch(`${fastApiUrl}/api/v1/database/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': fastApiKey,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('FastAPI error:', errorText)
      return NextResponse.json(
        { error: `FastAPI request failed: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Process the data
        const expenses = data.data.map((row: { expense_account: string; total_expense: string; transaction_count: string }) => ({
      expense_account: row.expense_account,
      total_expense: parseFloat(row.total_expense) || 0,
      transaction_count: parseInt(row.transaction_count) || 0,
    }))

        const totalExpenses = expenses.reduce((sum: number, exp: { total_expense: number }) => sum + exp.total_expense, 0)

    return NextResponse.json({
      totalExpenses,
      expenses,
    })

  } catch (error) {
    console.error('Error in vennala expenses route:', error)
    
    return NextResponse.json(
      { 
        error: "Failed to fetch expense data. Please try again later.",
        totalExpenses: 0,
        expenses: []
      },
      { status: 500 }
    )
  }
}
