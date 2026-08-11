import { useState, useMemo } from 'react';
import { Plane, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function VisaLoadToolCore() {
  const [totalCourseCredits, setTotalCourseCredits] = useState<number>(144);
  const [creditsCompleted, setCreditsCompleted] = useState<number>(48);
  const [semestersRemainingOnCoE, setSemestersRemainingOnCoE] = useState<number>(4);
  const [studyingInSummer, setStudyingInSummer] = useState<boolean>(false);

  const result = useMemo(() => {
    const creditsRemaining = totalCourseCredits - creditsCompleted;
    const requiredPerSemester = semestersRemainingOnCoE > 0 
      ? creditsRemaining / semestersRemainingOnCoE 
      : 0;

    let status = 'On Track';
    let color = 'text-emerald-600';
    let bgColor = 'bg-emerald-50';
    let borderColor = 'border-emerald-200';
    let Icon = CheckCircle;
    let message = `You need to average ${requiredPerSemester.toFixed(1)} credit points per semester. This is a standard full-time load.`;

    if (requiredPerSemester > 24) {
      status = 'Overloading Required';
      color = 'text-orange-600';
      bgColor = 'bg-orange-50';
      borderColor = 'border-orange-200';
      Icon = AlertTriangle;
      message = `You need ${requiredPerSemester.toFixed(1)} cp per semester. You must overload or take summer/winter units to finish before your CoE expires.`;
      
      if (studyingInSummer) {
        message += ' Taking summer units will help reduce your standard semester load.';
      }
    } else if (requiredPerSemester < 18 && creditsRemaining > 0) {
      status = 'Potential Under-enrollment';
      color = 'text-blue-600';
      bgColor = 'bg-blue-50';
      borderColor = 'border-blue-200';
      Icon = Info;
      message = `You only need ${requiredPerSemester.toFixed(1)} cp per semester. While comfortable, ensure you meet the minimum full-time enrollment requirements for your student visa (Condition 8202) unless approved for a reduced load.`;
    }

    return { 
      creditsRemaining, 
      requiredPerSemester,
      status, 
      color, 
      bgColor, 
      borderColor, 
      Icon, 
      message 
    };
  }, [totalCourseCredits, creditsCompleted, semestersRemainingOnCoE, studyingInSummer]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
          <Plane size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Visa Study Load Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Total Course Credits
              </label>
              <input
                type="number"
                min="0"
                step="24"
                value={totalCourseCredits}
                onChange={(e) => setTotalCourseCredits(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Credits Completed
              </label>
              <input
                type="number"
                min="0"
                step="6"
                max={totalCourseCredits}
                value={creditsCompleted}
                onChange={(e) => setCreditsCompleted(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Semesters left on your CoE
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={semestersRemainingOnCoE}
              onChange={(e) => setSemestersRemainingOnCoE(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="flex-shrink-0 pt-0.5">
              <input
                type="checkbox"
                checked={studyingInSummer}
                onChange={(e) => setStudyingInSummer(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <span className="text-sm text-slate-700 group-hover:text-slate-900">
              I plan to take units during the Summer/Winter teaching periods to catch up.
            </span>
          </label>
          
          <div className="text-xs text-slate-500 p-3 bg-slate-50 rounded-lg">
            <p><strong>Condition 8202:</strong> International students in Australia must maintain full-time enrollment and complete their course within the duration specified on their Confirmation of Enrolment (CoE).</p>
          </div>
        </div>

        <div className={`p-6 rounded-xl border flex flex-col justify-center text-center transition-colors ${result.bgColor} ${result.borderColor}`}>
          <div className="flex justify-center mb-4">
            <result.Icon size={48} className={result.color} />
          </div>
          <p className="text-slate-700 font-medium mb-1">Visa Compliance Status</p>
          <p className={`text-2xl md:text-3xl font-black mb-4 ${result.color}`}>
            {result.status}
          </p>
          
          <div className="bg-white/70 p-4 rounded-lg text-sm text-slate-800 shadow-sm text-left">
            <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-2">
              <span className="text-slate-500">Credits Remaining:</span>
              <span className="font-bold">{result.creditsRemaining} cp</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-3">
              <span className="text-slate-500">Required per Semester:</span>
              <span className="font-bold">{result.requiredPerSemester.toFixed(1)} cp</span>
            </div>
            <p className="text-slate-700 mt-3">{result.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
