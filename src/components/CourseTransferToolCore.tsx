import { useState, useMemo } from 'react';
import { ArrowRightLeft, CheckCircle2, XCircle } from 'lucide-react';

const COURSES = [
  { name: 'Bachelor of Laws (Honours)', minWam: 75, notes: 'Highly competitive. 75 is the absolute minimum, 80+ recommended.' },
  { name: 'Bachelor of Medical Science and Doctor of Medicine', minWam: 70, notes: 'Requires 70 WAM, but admission is primarily based on interview and UCAT/GAMSAT.' },
  { name: 'Bachelor of Commerce', minWam: 70, notes: 'Strongly requires meeting the math prerequisite (e.g., VCE Methods).' },
  { name: 'Bachelor of Engineering (Honours)', minWam: 70, notes: 'Must meet advanced mathematics and physics/chemistry prerequisites.' },
  { name: 'Bachelor of Computer Science', minWam: 70, notes: 'Requires high-level mathematics prerequisite.' },
  { name: 'Bachelor of Physiotherapy (Honours)', minWam: 75, notes: 'Very competitive due to limited clinical placements.' },
  { name: 'Bachelor of Science', minWam: 60, notes: 'Generally accessible transfer if science prerequisites are met.' },
  { name: 'Bachelor of Arts', minWam: 60, notes: 'Generally accessible transfer.' },
  { name: 'Bachelor of Education (Honours)', minWam: 65, notes: 'Must pass Casper test for teaching suitability.' },
  { name: 'Bachelor of Nursing', minWam: 65, notes: 'Requires meeting English language standards and clinical capacity limits.' },
];

export default function CourseTransferToolCore() {
  const [currentWam, setCurrentWam] = useState<number>(72.5);
  const [targetCourse, setTargetCourse] = useState<string>(COURSES[0].name);

  const result = useMemo(() => {
    const course = COURSES.find(c => c.name === targetCourse) || COURSES[0];
    const diff = currentWam - course.minWam;
    const isMeeting = currentWam >= course.minWam;
    
    return {
      course,
      diff,
      isMeeting,
      status: isMeeting ? 'Likely Eligible' : 'Below Cut-off',
      color: isMeeting ? 'text-emerald-600' : 'text-rose-600',
      bgColor: isMeeting ? 'bg-emerald-50' : 'bg-rose-50',
      borderColor: isMeeting ? 'border-emerald-200' : 'border-rose-200',
      Icon: isMeeting ? CheckCircle2 : XCircle
    };
  }, [currentWam, targetCourse]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-purple-100 rounded-xl text-purple-700">
          <ArrowRightLeft size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Course Transfer Checker</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Current WAM
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={currentWam}
              onChange={(e) => setCurrentWam(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Target Course (Internal Transfer)
            </label>
            <select
              value={targetCourse}
              onChange={(e) => setTargetCourse(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              {COURSES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name} (Min WAM: {c.minWam})
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-xs text-slate-500 p-3 bg-slate-50 rounded-lg">
            <p><strong>Note:</strong> Internal course transfers require you to meet both the minimum WAM cut-off and any subject prerequisites (e.g. VCE Methods) for the target degree. Meeting the WAM does not guarantee a spot.</p>
          </div>
        </div>

        <div className={`p-6 rounded-xl border flex flex-col justify-center text-center transition-colors ${result.bgColor} ${result.borderColor}`}>
          <div className="flex justify-center mb-4">
            <result.Icon size={48} className={result.color} />
          </div>
          <p className="text-slate-700 font-medium mb-1">Transfer Eligibility Status</p>
          <p className={`text-3xl font-black mb-4 ${result.color}`}>
            {result.status}
          </p>
          
          <div className="bg-white/70 p-4 rounded-lg text-sm text-slate-800 shadow-sm text-left">
            <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-2">
              <span className="text-slate-500">Required WAM:</span>
              <span className="font-bold">{result.course.minWam}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-3">
              <span className="text-slate-500">Your WAM:</span>
              <span className="font-bold">{currentWam}</span>
            </div>
            <p className="text-sm font-medium text-slate-700 mt-2">Course Notes:</p>
            <p className="text-slate-600 mt-1 italic">{result.course.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
