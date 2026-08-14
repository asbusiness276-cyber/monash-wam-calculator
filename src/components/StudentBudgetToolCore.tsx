import { useState } from 'react';

type BudgetItem = {
  id: string;
  name: string;
  amount: number;
};

export default function StudentBudgetToolCore() {
  const [incomes, setIncomes] = useState<BudgetItem[]>([{ id: '1', name: 'Part-time Job', amount: 300 }]);
  const [expenses, setExpenses] = useState<BudgetItem[]>([
    { id: '2', name: 'Rent', amount: 200 },
    { id: '3', name: 'Groceries', amount: 80 }
  ]);
  const [period, setPeriod] = useState<'weekly' | 'monthly'>('weekly');

  const addIncome = () => setIncomes([...incomes, { id: Date.now().toString(), name: '', amount: 0 }]);
  const addExpense = () => setExpenses([...expenses, { id: Date.now().toString(), name: '', amount: 0 }]);

  const updateIncome = (id: string, field: keyof BudgetItem, value: string | number) => {
    setIncomes(incomes.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const updateExpense = (id: string, field: keyof BudgetItem, value: string | number) => {
    setExpenses(expenses.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeIncome = (id: string) => setIncomes(incomes.filter(i => i.id !== id));
  const removeExpense = (id: string) => setExpenses(expenses.filter(i => i.id !== id));

  const totalIncome = incomes.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalExpense = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const netBalance = totalIncome - totalExpense;

  const multiplier = period === 'monthly' ? 4.33 : 1;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Student Budget Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Track your income and expenses to manage your student budget.</p>
        
        <div className="mt-4 flex gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
            <input type="radio" checked={period === 'weekly'} onChange={() => setPeriod('weekly')} className="text-indigo-600 focus:ring-indigo-500" />
            Weekly Budget
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
            <input type="radio" checked={period === 'monthly'} onChange={() => setPeriod('monthly')} className="text-indigo-600 focus:ring-indigo-500" />
            Monthly Budget
          </label>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-8">
        
        {/* Income Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-emerald-700">Income</h3>
            <button onClick={addIncome} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors">
              + Add Income
            </button>
          </div>
          <div className="space-y-3">
            {incomes.map(item => (
              <div key={item.id} className="flex gap-3">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateIncome(item.id, 'name', e.target.value)}
                  placeholder="E.g., Allowance"
                  className="w-full sm:w-1/2 rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => updateIncome(item.id, 'amount', Number(e.target.value))}
                    placeholder="0.00"
                    className="w-full pl-7 rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <button onClick={() => removeIncome(item.id)} className="text-red-500 hover:text-red-700 px-2" aria-label="Remove item">
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Expenses Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-rose-700">Expenses</h3>
            <button onClick={addExpense} className="text-sm font-medium text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg transition-colors">
              + Add Expense
            </button>
          </div>
          <div className="space-y-3">
            {expenses.map(item => (
              <div key={item.id} className="flex gap-3">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateExpense(item.id, 'name', e.target.value)}
                  placeholder="E.g., Groceries"
                  className="w-full sm:w-1/2 rounded-lg border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => updateExpense(item.id, 'amount', Number(e.target.value))}
                    placeholder="0.00"
                    className="w-full pl-7 rounded-lg border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <button onClick={() => removeExpense(item.id)} className="text-red-500 hover:text-red-700 px-2" aria-label="Remove item">
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className={`p-6 border-t ${netBalance >= 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Income</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">${(totalIncome * multiplier).toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Expenses</p>
            <p className="text-xl font-bold text-rose-600 mt-1">${(totalExpense * multiplier).toFixed(2)}</p>
          </div>
          <div className="border-l border-slate-300 pl-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Balance</p>
            <p className={`text-xl font-bold mt-1 ${netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
              {netBalance >= 0 ? '+' : '-'}${Math.abs(netBalance * multiplier).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
