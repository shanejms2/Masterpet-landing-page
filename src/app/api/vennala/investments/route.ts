import { NextResponse } from "next/server"

export async function GET() {
  try {
    const fastApiUrl = process.env.FASTAPI_URL || 'http://167.235.23.131:8000'
    const fastApiKey = process.env.FASTAPI_API_KEY

    if (!fastApiKey) {
      return NextResponse.json(
        { error: "FastAPI API key is not configured" },
        { status: 500 }
      )
    }

    // Query to get investment data from the specific loan accounts using GL Entry
    const query = `
      SELECT 
        account as account_name,
        ABS(balance) as balance,
        CASE 
          WHEN account LIKE '%AKASH MANUJI%' THEN 'AKASH MANUJI'
          WHEN account LIKE '%PRITHVIRAJ RAJESH GOPAL%' THEN 'PRITHVIRAJ RAJESH GOPAL'
          WHEN account LIKE '%SEBASTIAN KOIKKARA%' THEN 'SEBASTIAN KOIKKARA'
          WHEN account LIKE '%SHANE JAMES%' THEN 'SHANE JAMES'
        END as director_name
      FROM (
        SELECT 
          account,
          (SUM(debit) - SUM(credit)) as balance
        FROM \`tabGL Entry\`
        WHERE account IN (
          'Loan from Director AKASH MANUJI for Pet Store - MP',
          'Loan from Director PRITHVIRAJ RAJESH GOPAL for Pet Store - MP',
          'Loan from Director SEBASTIAN KOIKKARA for Pet Store - MP',
          'Loan from Director SHANE JAMES for Pet Store - MP'
        )
        GROUP BY account
      ) as account_balances
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
        const investments = data.data.map((row: { director_name: string; account_name: string; balance: string }) => ({
      account_name: row.account_name,
      balance: parseFloat(row.balance) || 0,
      director_name: row.director_name,
    }))

        const totalInvestment = investments.reduce((sum: number, inv: { balance: number }) => sum + inv.balance, 0)

    return NextResponse.json({
      totalInvestment,
      investments,
    })

  } catch (error) {
    console.error('Error in vennala investments route:', error)
    
    return NextResponse.json(
      { 
        error: "Failed to fetch investment data. Please try again later.",
        totalInvestment: 0,
        investments: []
      },
      { status: 500 }
    )
  }
}
