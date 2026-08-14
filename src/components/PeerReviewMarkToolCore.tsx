import { useState } from 'react';

export default function PeerReviewMarkToolCore() {
  const [groupMark, setGroupMark] = useState<number>(75);
  const [peerFactor, setPeerFactor] = useState<number>(0.8);
  const [maxMark, setMaxMark] = useState<number>(100);

  // Common SPARKPLUS formula: Individual Mark = Group Mark * Peer Factor
  // Usually capped at the maximum possible mark (e.g. 100)
  const individualMark = Math.min(maxMark, groupMark * peerFactor);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Group Peer Mark Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate your individual mark after peer review multipliers.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Overall Group Mark (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={groupMark || ''}
              onChange={(e) => setGroupMark(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Your Peer Evaluation Factor</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="2"
              value={peerFactor || ''}
              onChange={(e) => setPeerFactor(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">e.g., 1.0 (Average), 0.8 (Underperforming), 1.2 (Carried the team)</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-center">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Your Individual Mark</p>
          <p className={`text-5xl font-extrabold mt-3 ${individualMark < 50 ? 'text-rose-600' : 'text-indigo-600'}`}>
            {individualMark.toFixed(1)}%
          </p>
          <div className="mt-4 pt-4 border-t border-slate-200">
            {peerFactor < 1 ? (
              <p className="text-sm text-rose-600 font-medium">Your group members rated your contribution as below average. Your mark has been reduced from {groupMark}%.</p>
            ) : peerFactor > 1 ? (
              <p className="text-sm text-emerald-600 font-medium">Your group rated you highly! Your mark has been boosted from {groupMark}%. (Note: Marks are capped at {maxMark}%).</p>
            ) : (
              <p className="text-sm text-slate-600 font-medium">You contributed an equal amount. You receive the exact group mark.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
