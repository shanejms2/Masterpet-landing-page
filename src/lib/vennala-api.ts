export interface InvestmentData {
  account_name: string;
  balance: number;
  director_name: string;
}

interface ExpenseData {
  expense_account: string;
  total_expense: number;
  transaction_count: number;
}

export interface VennalaMetrics {
  investment: {
    totalInvestment: number;
    investments: InvestmentData[];
  };
  expenses: {
    totalExpenses: number;
    expenses: ExpenseData[];
  };
}

export class VennalaAPI {
  async getInvestmentData(): Promise<VennalaMetrics> {
    try {
      const response = await fetch('/api/vennala/investments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        investment: {
          totalInvestment: data.totalInvestment || 0,
          investments: data.investments || [],
        },
        expenses: {
          totalExpenses: 0,
          expenses: [],
        },
      };
    } catch (error) {
      console.error('Error fetching investment data:', error);
      return {
        investment: {
          totalInvestment: 0,
          investments: [],
        },
        expenses: {
          totalExpenses: 0,
          expenses: [],
        },
      };
    }
  }

  async getExpenseData(): Promise<{ totalExpenses: number; expenses: ExpenseData[] }> {
    try {
      const response = await fetch('/api/vennala/expenses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        totalExpenses: data.totalExpenses || 0,
        expenses: data.expenses || [],
      };
    } catch (error) {
      console.error('Error fetching expense data:', error);
      return {
        totalExpenses: 0,
        expenses: [],
      };
    }
  }

  async getAllVennalaData(): Promise<VennalaMetrics> {
    try {
      const [investmentData, expenseData] = await Promise.all([
        this.getInvestmentData(),
        this.getExpenseData()
      ]);
      
      return {
        investment: {
          totalInvestment: investmentData.investment.totalInvestment,
          investments: investmentData.investment.investments,
        },
        expenses: {
          totalExpenses: expenseData.totalExpenses,
          expenses: expenseData.expenses,
        },
      };
    } catch (error) {
      console.error('Error fetching all Vennala data:', error);
      return {
        investment: {
          totalInvestment: 0,
          investments: [],
        },
        expenses: {
          totalExpenses: 0,
          expenses: [],
        },
      };
    }
  }

  async getStoreMetrics(): Promise<VennalaMetrics> {
    // Get all Vennala data including investments and expenses
    const allData = await this.getAllVennalaData();
    
    return {
      investment: {
        totalInvestment: allData.investment.totalInvestment,
        investments: allData.investment.investments
      },
      expenses: {
        totalExpenses: allData.expenses.totalExpenses,
        expenses: allData.expenses.expenses
      }
    };
  }
}

export const vennalaAPI = new VennalaAPI();
