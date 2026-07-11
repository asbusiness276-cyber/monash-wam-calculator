import { useState, useCallback } from 'react';
import { Plus, Trash2, RotateCcw, Copy, Check, TrendingUp } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import { matchSubjectByUnit, matchUnitBySubject } from '../utils/unitSubjectSuggestions';
import {
  calculateCreditWeightedWam,
  calculateMonashOfficialWam,
  getMonashGradeFromMark,
  inferMonashYearLevelFromUnitCode,
} from '../utils/monashGrades';

interface Subject {
  id: number;
  unit: string;
  subject: string;
  mark: string;
  credits: string;
  yearLevel: string;
}

interface WAMResult {
  officialWam: number;
  planningWam: number;
  totalCredits: number;
  totalSubjects: number;
  avgMark: number;
  grade: string;
  gradeLabel: string;
  gradeColor: string;
}

const yearLevelOptions = ['1', '2', '3', '4'] as const;

function defaultYearLevelForUnit(unitCode: string): string {
  return String(inferMonashYearLevelFromUnitCode(unitCode) ?? 1);
}

let nextId = 4;

const defaultSubjects: Subject[] = [
  {
    id: 1,
    unit: 'FIT1045',
    subject: matchSubjectByUnit('FIT1045') ?? '',
    mark: '80',
    credits: '6',
    yearLevel: defaultYearLevelForUnit('FIT1045'),
  },
  {
    id: 2,
    unit: 'MAT1830',
    subject: matchSubjectByUnit('MAT1830') ?? '',
    mark: '75',
    credits: '6',
    yearLevel: defaultYearLevelForUnit('MAT1830'),
  },
  {
    id: 3,
    unit: 'ENG1005',
    subject: matchSubjectByUnit('ENG1005') ?? '',
    mark: '70',
    credits: '6',
    yearLevel: defaultYearLevelForUnit('ENG1005'),
  },
];

interface WAMCalculatorProps {
  /** Reserved for embed contexts (e.g. article iframes). */
  embedSuppressRecommendations?: boolean;
  /** Homepage premium shell — layout and typography only. */
  shellVariant?: 'default' | 'home';
}

export default function WAMCalculator({ shellVariant = 'default' }: WAMCalculatorProps = {}) {
  const isHomeShell = shellVariant === 'home';
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
  const [copied, setCopied] = useState(false);

  const calculateWAM = useCallback((): WAMResult | null => {
    const valid = subjects.filter(s => s.mark !== '' && s.credits !== '');
    if (valid.length === 0) return null;

    const parsedUnits = valid
      .map(s => ({
        mark: parseFloat(s.mark),
        credits: parseFloat(s.credits),
        yearLevel: parseInt(s.yearLevel, 10) || 1,
      }))
      .filter(unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0);

    if (parsedUnits.length === 0) return null;

    const planningWam = calculateCreditWeightedWam(parsedUnits);
    const officialWam = calculateMonashOfficialWam(parsedUnits);
    if (planningWam === null || officialWam === null) return null;

    const totalCredits = parsedUnits.reduce((sum, unit) => sum + unit.credits, 0);
    const avgMark = parsedUnits.reduce((sum, unit) => sum + unit.mark, 0) / parsedUnits.length;
    const gradeBand = getMonashGradeFromMark(officialWam);

    return {
      officialWam,
      planningWam,
      totalCredits,
      totalSubjects: parsedUnits.length,
      avgMark: Math.round(avgMark * 100) / 100,
      grade: gradeBand?.grade ?? '—',
      gradeLabel: gradeBand?.label ?? 'Unknown',
      gradeColor: gradeBand?.color ?? 'text-gray-500',
    };
  }, [subjects]);

  const result = calculateWAM();

  const addSubject = () => {
    setSubjects(prev => [
      ...prev,
      { id: nextId++, unit: '', subject: '', mark: '', credits: '6', yearLevel: '1' },
    ]);
  };

  const removeSubject = (id: number) => {
    setSubjects(prev => prev.filter(s => s.id !== id));
  };

  const updateSubject = (id: number, field: keyof Subject, value: string) => {
    setSubjects(prev =>
      prev.map(s => {
        if (s.id !== id) return s;
        const normalizedValue = field === 'unit' ? value.toUpperCase() : value;
        const next = { ...s, [field]: normalizedValue };

        if (field === 'unit') {
          const matchedSubject = matchSubjectByUnit(normalizedValue);
          if (matchedSubject) next.subject = matchedSubject;
          const inferredYear = inferMonashYearLevelFromUnitCode(normalizedValue);
          if (inferredYear !== null) next.yearLevel = String(inferredYear);
        }

        if (field === 'subject') {
          const matchedUnit = matchUnitBySubject(normalizedValue);
          if (matchedUnit) next.unit = matchedUnit;
        }

        return next;
      })
    );
  };

  const reset = () => {
    setSubjects([
      { id: 1, unit: '', subject: '', mark: '', credits: '6', yearLevel: '1' },
      { id: 2, unit: '', subject: '', mark: '', credits: '6', yearLevel: '1' },
    ]);
  };

  const copyResult = async () => {
    if (!result) return;
    const text = `Official Monash WAM: ${result.officialWam.toFixed(2)} | Planning WAM: ${result.planningWam.toFixed(2)} | Grade: ${result.grade} (${result.gradeLabel}) | Credits: ${result.totalCredits} | Subjects: ${result.totalSubjects}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateMark = (val: string) => {
    const n = parseFloat(val);
    return val === '' || (n >= 0 && n <= 100);
  };

  return (
    <>
      <section id="calculator" className={`scroll-mt-20 ${isHomeShell ? 'pb-4 md:pb-6' : ''}`}>
        <div className={isHomeShell ? 'home-container py-8 md:py-10' : 'max-w-6xl mx-auto px-4 py-8'}>
        <div className={`text-center ${isHomeShell ? 'mb-8 md:mb-10 max-w-2xl mx-auto' : 'mb-6'}`}>
          {isHomeShell && (
            <p className="home-eyebrow mb-3">Main calculator</p>
          )}
          <h2
            className={
              isHomeShell
                ? 'home-section-title text-gray-900 dark:text-white'
                : 'text-3xl font-bold text-gray-900 dark:text-white mb-3'
            }
          >
            WAM Calculator — Enter Your Marks
          </h2>
          <p
            className={
              isHomeShell
                ? 'mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed text-pretty'
                : 'text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'
            }
          >
            Enter marks, credit points, and year level for each unit. We calculate{' '}
            <strong className="text-gray-700 dark:text-gray-300">official Monash WAM</strong> (first-year 0.5 weighting)
            plus a simple planning WAM for comparison.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-6 lg:gap-8 items-start" data-article-tool-screenshot="monash-wam">
          <div className="min-w-0 space-y-4">
            <div
              className={
                isHomeShell
                  ? 'premium-card overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-premium-lg dark:border-gray-700/80 dark:bg-gray-800'
                  : 'bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'
              }
            >
              <div className="md:hidden p-3 space-y-3">
                {subjects.map((s, i) => (
                  <div key={`mobile-${s.id}`} className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 space-y-3">
                    <div className="grid grid-cols-1 gap-3">
                      <label className="block">
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Unit Name</span>
                        <UnitAutocompleteInput
                          field="unit"
                          value={s.unit}
                          onChange={v => updateSubject(s.id, 'unit', v)}
                          placeholder={`e.g. FIT${1000 + i}`}
                          className="mt-1"
                          inputClassName="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Subject</span>
                        <UnitAutocompleteInput
                          field="subject"
                          value={s.subject}
                          onChange={v => updateSubject(s.id, 'subject', v)}
                          placeholder="e.g. Introduction to Programming"
                          className="mt-1"
                          inputClassName="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                        />
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <label className="block">
                          <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Final Mark</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0-100"
                            value={s.mark}
                            onChange={e => {
                              if (validateMark(e.target.value)) updateSubject(s.id, 'mark', e.target.value);
                            }}
                            className="w-full h-11 mt-1 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                          />
                        </label>
                        <label className="block">
                          <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Credit Points</span>
                          <input
                            type="number"
                            min="1"
                            placeholder="6"
                            value={s.credits}
                            onChange={e => updateSubject(s.id, 'credits', e.target.value)}
                            className="w-full h-11 mt-1 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Year Level</span>
                        <select
                          value={s.yearLevel}
                          onChange={e => updateSubject(s.id, 'yearLevel', e.target.value)}
                          className="w-full h-11 mt-1 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                        >
                          {yearLevelOptions.map(level => (
                            <option key={level} value={level}>
                              Year {level}{level === '1' ? ' (0.5 weight)' : ''}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => removeSubject(s.id)}
                        disabled={subjects.length <= 1}
                        className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded"
                        aria-label="Remove subject"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[860px]">
                  <thead>
                    <tr className="bg-primary-50 dark:bg-primary-900/30 border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[130px]">Unit Name</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[190px]">Subject</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Final Mark (%)</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Credit Points</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[110px]">Year</th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {subjects.map((s, i) => (
                      <tr key={s.id} className="group hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <td className="px-4 py-3 relative min-w-[130px]">
                          <UnitAutocompleteInput
                            field="unit"
                            value={s.unit}
                            onChange={v => updateSubject(s.id, 'unit', v)}
                            placeholder={`e.g. FIT${1000 + i}`}
                            inputClassName="w-full min-w-[110px] bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                        </td>
                        <td className="px-4 py-3 relative min-w-[190px]">
                          <UnitAutocompleteInput
                            field="subject"
                            value={s.subject}
                            onChange={v => updateSubject(s.id, 'subject', v)}
                            placeholder="e.g. Introduction to Programming"
                            inputClassName="w-full min-w-[170px] bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0–100"
                            value={s.mark}
                            onChange={e => {
                              if (validateMark(e.target.value)) updateSubject(s.id, 'mark', e.target.value);
                            }}
                            className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="1"
                            placeholder="6"
                            value={s.credits}
                            onChange={e => updateSubject(s.id, 'credits', e.target.value)}
                            className="w-full bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={s.yearLevel}
                            onChange={e => updateSubject(s.id, 'yearLevel', e.target.value)}
                            className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm border border-gray-200 dark:border-gray-600 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary-400"
                          >
                            {yearLevelOptions.map(level => (
                              <option key={level} value={level}>
                                Y{level}{level === '1' ? ' (0.5)' : ''}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            onClick={() => removeSubject(s.id)}
                            disabled={subjects.length <= 1}
                            className="p-1.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded"
                            aria-label="Remove subject"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3">
                <button
                  onClick={addSubject}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                  <Plus size={16} />
                  Add Subject
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors"
                >
                  <RotateCcw size={16} />
                  Reset Calculator
                </button>
              </div>
            </div>

            <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Monash Grade Reference</h3>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { range: '80–100', grade: 'HD', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' },
                  { range: '70–79', grade: 'D', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' },
                  { range: '60–69', grade: 'C', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400' },
                  { range: '50–59', grade: 'P', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400' },
                  { range: '0–49', grade: 'N', color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' },
                ].map(g => (
                  <div key={g.grade} className={`rounded-lg p-2 text-center ${g.color}`}>
                    <div className="font-bold text-sm">{g.grade}</div>
                    <div className="text-xs opacity-80">{g.range}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="min-w-0 w-full lg:sticky lg:top-24 space-y-4">
            <div
              className={
                isHomeShell
                  ? 'premium-card overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-premium-lg dark:border-gray-700/80 dark:bg-gray-800'
                  : 'bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden'
              }
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-5 md:rounded-t-3xl">
                <div className="flex items-center gap-2 text-primary-100 text-sm font-medium mb-1">
                  <TrendingUp size={16} />
                  Your WAM Results
                </div>
                {result ? (
                  <>
                    <div className="text-xs text-primary-200 uppercase tracking-wide">Official Monash WAM</div>
                    <div className="text-5xl font-bold text-white mt-1">{result.officialWam.toFixed(2)}</div>
                    <div className={`text-sm font-semibold mt-1 ${result.gradeColor} text-white opacity-90`}>
                      {result.grade} — {result.gradeLabel}
                    </div>
                    {result.planningWam !== result.officialWam && (
                      <div className="text-xs text-primary-100/90 mt-2">
                        Planning WAM: {result.planningWam.toFixed(2)}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-3xl font-bold text-primary-200 mt-1">—</div>
                )}
              </div>

              <div className="px-6 py-5 space-y-4">
                {result ? (
                  <>
                    <div className="space-y-3">
                      {result.planningWam !== result.officialWam && (
                        <ResultRow label="Planning WAM" value={result.planningWam.toFixed(2)} />
                      )}
                      <ResultRow label="Total Credit Points" value={String(result.totalCredits)} />
                      <ResultRow label="Total Subjects" value={String(result.totalSubjects)} />
                      <ResultRow label="Average Mark" value={`${result.avgMark.toFixed(2)}%`} />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      Official WAM uses Monash year-level weighting (Year 1 = 0.5, Year 2+ = 1.0). Planning WAM is
                      simple credit-weighted maths. Verify special grades and exclusions on WES.
                    </p>
                    <button
                      onClick={copyResult}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 text-primary-700 dark:text-primary-400 text-sm font-medium rounded-lg transition-colors"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'Copied!' : 'Copy Result'}
                    </button>
                  </>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                    Enter marks above to see your WAM
                  </p>
                )}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-2">Need to convert WAM to GPA?</p>
              <a
                href="/wam-to-gpa-calculator"
                className="block text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
              >
                Open WAM to GPA Calculator →
              </a>
            </div>
          </aside>
        </div>
        </div>
      </section>
    </>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-3">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{value}</span>
    </div>
  );
}
