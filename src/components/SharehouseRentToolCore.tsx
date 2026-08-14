import { useState } from 'react';

type Roommate = {
  id: number;
  name: string;
  sizeSqM: number;
  hasEnsuite: boolean;
};

export default function SharehouseRentToolCore() {
  const [totalRent, setTotalRent] = useState<number>(600); // weekly
  const [ensuitePremium, setEnsuitePremium] = useState<number>(20); // dollar premium for ensuite
  const [roommates, setRoommates] = useState<Roommate[]>([
    { id: 1, name: 'Roommate A', sizeSqM: 12, hasEnsuite: false },
    { id: 2, name: 'Roommate B', sizeSqM: 15, hasEnsuite: true },
  ]);

  const addRoommate = () => {
    const id = Math.max(0, ...roommates.map(r => r.id)) + 1;
    setRoommates([...roommates, { id, name: `Roommate ${String.fromCharCode(64 + id)}`, sizeSqM: 10, hasEnsuite: false }]);
  };

  const removeRoommate = (id: number) => {
    if (roommates.length > 1) {
      setRoommates(roommates.filter(r => r.id !== id));
    }
  };

  const updateRoommate = (id: number, field: keyof Roommate, value: any) => {
    setRoommates(roommates.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  // Logic: 
  // Base rent is split equally among everyone (Common areas) -> say 40% of rent is common areas.
  // The other 60% of rent is split proportionally based on room size + ensuite premium.
  const commonAreaRatio = 0.40;
  const commonRent = totalRent * commonAreaRatio;
  const roomRent = totalRent * (1 - commonAreaRatio);
  
  const totalSqM = roommates.reduce((acc, r) => acc + (r.sizeSqM || 0), 0);
  const ensuiteCount = roommates.filter(r => r.hasEnsuite).length;
  
  // Total premium taken by ensuites
  const totalEnsuitePremium = ensuitePremium * ensuiteCount;
  
  // The rent left to distribute by square meters
  const rentToDistributeBySize = Math.max(0, roomRent - totalEnsuitePremium);

  const calculatedRents = roommates.map(r => {
    // 1. Equal share of common areas
    const commonShare = commonRent / roommates.length;
    
    // 2. Proportional share of room area
    const sizeShare = totalSqM > 0 ? (r.sizeSqM / totalSqM) * rentToDistributeBySize : 0;
    
    // 3. Ensuite premium
    const premiumShare = r.hasEnsuite ? ensuitePremium : 0;
    
    return {
      ...r,
      finalRent: commonShare + sizeShare + premiumShare
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Sharehouse Rent Splitter</h2>
        <p className="text-sm text-slate-600 mt-1">Mathematically fair rent distribution based on room size.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total Rent ($ / week)</label>
            <input
              type="number"
              min="0"
              value={totalRent || ''}
              onChange={(e) => setTotalRent(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg font-bold"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Ensuite Premium ($ / week extra)</label>
            <input
              type="number"
              min="0"
              value={ensuitePremium === 0 ? '' : ensuitePremium}
              onChange={(e) => setEnsuitePremium(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <label className="block text-sm font-semibold text-slate-700">Roommates</label>
          {roommates.map((r, i) => (
            <div key={r.id} className="flex flex-wrap md:flex-nowrap items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <input
                type="text"
                value={r.name}
                onChange={(e) => updateRoommate(r.id, 'name', e.target.value)}
                placeholder="Name"
                className="flex-[2] rounded border-slate-300 text-sm"
              />
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={r.sizeSqM || ''}
                  onChange={(e) => updateRoommate(r.id, 'sizeSqM', Number(e.target.value))}
                  placeholder="SqM"
                  className="w-full rounded border-slate-300 text-sm"
                />
                <span className="text-xs text-slate-500 font-medium">m²</span>
              </div>
              <label className="flex-[1.5] flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={r.hasEnsuite}
                  onChange={(e) => updateRoommate(r.id, 'hasEnsuite', e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                Has Ensuite?
              </label>
              {roommates.length > 1 && (
                <button
                  onClick={() => removeRoommate(r.id)}
                  className="text-rose-500 hover:text-rose-700 p-1 rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addRoommate}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            + Add another roommate
          </button>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 mt-6">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide mb-4">Fair Rent Split</p>
          <div className="space-y-3">
            {calculatedRents.map(r => (
              <div key={r.id} className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-indigo-50">
                <div>
                  <p className="font-bold text-slate-800">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.sizeSqM}m² {r.hasEnsuite ? '+ Ensuite' : ''}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-indigo-600">${r.finalRent.toFixed(2)}</p>
                  <p className="text-xs text-slate-400">per week</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
