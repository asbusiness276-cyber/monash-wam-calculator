import { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function AcademicStandingToolCore() {
  const [passedCredits, setPassedCredits] = useState<number>(18);
  const [failedCredits, setFailedCredits] = useState<number>(6);
  const [failedCompulsoryTwice, setFailedCompulsoryTwice] = useState<boolean>(false);
  const [failedFacultyConditions, setFailedFacultyConditions] = useState<boolean>(false);

  const result = useMemo(() => {
    const totalCredits = passedCredits + failedCredits;
    const passRate = totalCredits > 0 ? (passedCredits / totalCredits) * 100 : 100;
    
    let status = 'Good Standing';
    let color = 'text-emerald-600';
    let bgColor = 'bg-emerald-50';
    let borderColor = 'border-emerald-200';
    let Icon = CheckCircle;
    let message = 'You are meeting the academic progress requirements. Keep up the good work!';

    if (failedFacultyConditions) {
      status = 'Notice of Referral & Hearing';
      color = 'text-red-700';
      bgColor = 'bg-red-50';
      borderColor = 'border-red-200';
      Icon = AlertTriangle;
      message = 'Failing to meet conditions previously imposed by the faculty usually results in an automatic referral to the Academic Progress Committee (APC) for an exclusion hearing.';
    } else if (failedCompulsoryTwice || passRate < 50) {
      status = 'Academic Risk / Warning';
      color = 'text-orange-600';
      bgColor = 'bg-orange-50';
      borderColor = 'border-orange-200';
      Icon = AlertTriangle;
      message = passRate < 50 
        ? 'You have passed less than 50% of your enrolled credit points. The faculty will likely send you an academic warning or ask you to show cause.'
        : 'Failing the same compulsory unit twice triggers an academic progress review.';
    }

    return { status, color, bgColor, borderColor, Icon, message, passRate };
  }, [passedCredits, failedCredits, failedCompulsoryTwice, failedFacultyConditions]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-orange-100 rounded-xl text-orange-700">
          <AlertTriangle size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Academic Standing Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Passed Credits (This Period)
              </label>
              <input
                type="number"
                min="0"
                step="6"
                value={passedCredits}
                onChange={(e) => setPassedCredits(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Failed Credits (This Period)
              </label>
              <input
                type="number"
                min="0"
                step="6"
                value={failedCredits}
                onChange={(e) => setFailedCredits(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="flex-shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  checked={failedCompulsoryTwice}
                  onChange={(e) => setFailedCompulsoryTwice(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                />
              </div>
              <span className="text-sm text-slate-700 group-hover:text-slate-900">
                Have you failed the <strong>same compulsory unit</strong> twice or more?
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="flex-shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  checked={failedFacultyConditions}
                  onChange={(e) => setFailedFacultyConditions(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                />
              </div>
              <span className="text-sm text-slate-700 group-hover:text-slate-900">
                Have you failed to comply with any <strong>conditions imposed</strong> by the Academic Progress Committee (APC) previously?
              </span>
            </label>
          </div>
          
          <div className="flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
            <Info size={16} className="flex-shrink-0 text-slate-400 mt-0.5" />
            <p>Monash University (and most Australian universities) review your progress at the end of each semester to ensure you can successfully complete your course.</p>
          </div>
        </div>

        <div className={`p-6 rounded-xl border flex flex-col justify-center text-center transition-colors ${result.bgColor} ${result.borderColor}`}>
          <div className="flex justify-center mb-4">
            <result.Icon size={48} className={result.color} />
          </div>
          <p className="text-slate-700 font-medium mb-1">Your Academic Standing</p>
          <p className={`text-3xl font-black mb-4 ${result.color}`}>
            {result.status}
          </p>
          
          <div className="bg-white/70 p-4 rounded-lg text-sm text-slate-800 shadow-sm">
            <p>{result.message}</p>
            <div className="mt-4 pt-4 border-t border-slate-200/50 flex justify-between">
              <span className="text-slate-500">Semester Pass Rate:</span>
              <span className="font-bold">{result.passRate.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
