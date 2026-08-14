import { useState, useCallback } from 'react';
import { Plus, Trash2, RotateCcw, Copy, Check, TrendingUp, Calculator } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import { matchSubjectByUnit, matchUnitBySubject } from '../utils/unitSubjectSuggestions';
import {
  calculateCreditWeightedWam,
  calculateUniOfficialWam,
  getUniGradeFromMark,
  inferUniYearLevelFromUnitCode,
} from '../utils/uniGrades';
import AmazonResultPopUpModal from './AmazonResultPopUpModal';

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
  return String(inferUniYearLevelFromUnitCode(unitCode) ?? 1);
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
    console.log("DEBUG: valid length", valid.length);
    if (valid.length === 0) return null;

    const parsedUnits = valid
      .map(s => ({
        mark: parseFloat(s.mark),
        credits: parseFloat(s.credits),
        yearLevel: parseInt(s.yearLevel, 10) || 1,
      }))
      .filter(unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0);
    console.log("DEBUG: parsedUnits", parsedUnits);

    if (parsedUnits.length === 0) return null;

    const planningWam = calculateCreditWeightedWam(parsedUnits);
    const officialWam = calculateUniOfficialWam(parsedUnits);
    console.log("DEBUG: planningWam", planningWam, "officialWam", officialWam);
    if (planningWam === null || officialWam === null) return null;

    const totalCredits = parsedUnits.reduce((sum, unit) => sum + unit.credits, 0);
    const avgMark = parsedUnits.reduce((sum, unit) => sum + unit.mark, 0) / parsedUnits.length;
    const gradeBand = getUniGradeFromMark(officialWam);

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckResult = () => {
    setIsSubmitted(true);
  };

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
          const inferredYear = inferUniYearLevelFromUnitCode(normalizedValue);
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
    const text = `Official WAM: ${result.officialWam.toFixed(2)} | Planning WAM: ${result.planningWam.toFixed(2)} | Grade: ${result.grade} (${result.gradeLabel}) | Credits: ${result.totalCredits} | Subjects: ${result.totalSubjects}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateMark = (val: string) => {
    const n = parseFloat(val);
    return val === '' || (n >= 0 && n <= 100);
  };

  const shellClass = isHomeShell ? 'calc-shell' : 'calc-shell-default';
  const resultCardClass = isHomeShell ? 'calc-result-card' : 'calc-result-card-default';
  const inputClass = 'calc-input h-11';
  const tableInputClass = 'calc-table-input';

  return (
    <>
      <section id="calculator" className={`scroll-mt-20 ${isHomeShell ? 'pb-4 md:pb-6' : ''}`}>
        <div className={isHomeShell ? 'home-container home-calc-container pt-2 pb-8 md:pt-3 md:pb-10' : 'max-w-6xl mx-auto px-4 py-8'}>
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
            <strong className="text-gray-700 dark:text-gray-300">official WAM</strong> (first-year 0.5 weighting)
            plus a simple planning WAM for comparison.
          </p>
        </div>

        <div
          className={
            isHomeShell
              ? 'grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-10'
              : 'grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_19.5rem] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-10'
          }
          data-article-tool-screenshot="uni-wam"
        >
          <div className="min-w-0 space-y-5">
            <div className={shellClass}>
              {/* Mobile — unit cards */}
              <div className="space-y-3 p-3 md:hidden sm:p-4">
                {subjects.map((s, i) => (
                  <div key={`mobile-${s.id}`} className="calc-mobile-card">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-600 dark:text-primary-400">
                        Unit {i + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeSubject(s.id)}
                        disabled={subjects.length <= 1}
                        className="calc-btn-icon"
                        aria-label={`Remove unit ${i + 1}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-3.5">
                      <label className="block">
                        <span className="calc-label">Unit Name</span>
                        <UnitAutocompleteInput
                          field="unit"
                          value={s.unit}
                          onChange={v => updateSubject(s.id, 'unit', v)}
                          placeholder={`e.g. FIT${1000 + i}`}
                          className="mt-1.5"
                          inputClassName={inputClass}
                        />
                      </label>

                      <label className="block">
                        <span className="calc-label">Subject</span>
                        <UnitAutocompleteInput
                          field="subject"
                          value={s.subject}
                          onChange={v => updateSubject(s.id, 'subject', v)}
                          placeholder="e.g. Introduction to Programming"
                          className="mt-1.5"
                          inputClassName={inputClass}
                        />
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <label className="block">
                          <span className="calc-label">Final Mark</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0–100"
                            value={s.mark}
                            onChange={e => {
                              if (validateMark(e.target.value)) updateSubject(s.id, 'mark', e.target.value);
                            }}
                            className={`${inputClass} mt-1.5`}
                          />
                        </label>
                        <label className="block">
                          <span className="calc-label">Credit Points</span>
                          <input
                            type="number"
                            min="1"
                            placeholder="6"
                            value={s.credits}
                            onChange={e => updateSubject(s.id, 'credits', e.target.value)}
                            className={`${inputClass} mt-1.5`}
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="calc-label">Year Level</span>
                        <select
                          value={s.yearLevel}
                          onChange={e => updateSubject(s.id, 'yearLevel', e.target.value)}
                          className={`${inputClass} mt-1.5`}
                        >
                          {yearLevelOptions.map(level => (
                            <option key={level} value={level}>
                              Year {level}{level === '1' ? ' (0.5 weight)' : ''}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop — table */}
              <div className="calc-table-wrap">
                <table className="calc-table">
                  <thead>
                    <tr>
                      <th className="min-w-[7.5rem]">Unit Name</th>
                      <th className="min-w-[10rem]">Subject</th>
                      <th className="min-w-[6.5rem]">Final Mark (%)</th>
                      <th className="min-w-[5rem]">Credits</th>
                      <th className="min-w-[6rem]">Year</th>
                      <th className="w-14 text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((s, i) => (
                      <tr key={s.id}>
                        <td className="relative min-w-[7.5rem]">
                          <UnitAutocompleteInput
                            field="unit"
                            value={s.unit}
                            onChange={v => updateSubject(s.id, 'unit', v)}
                            placeholder={`e.g. FIT${1000 + i}`}
                            inputClassName={tableInputClass}
                          />
                        </td>
                        <td className="relative min-w-[10rem]">
                          <UnitAutocompleteInput
                            field="subject"
                            value={s.subject}
                            onChange={v => updateSubject(s.id, 'subject', v)}
                            placeholder="e.g. Introduction to Programming"
                            inputClassName={tableInputClass}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0–100"
                            value={s.mark}
                            onChange={e => {
                              if (validateMark(e.target.value)) updateSubject(s.id, 'mark', e.target.value);
                            }}
                            className={tableInputClass}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="1"
                            placeholder="6"
                            value={s.credits}
                            onChange={e => updateSubject(s.id, 'credits', e.target.value)}
                            className={tableInputClass}
                          />
                        </td>
                        <td>
                          <select
                            value={s.yearLevel}
                            onChange={e => updateSubject(s.id, 'yearLevel', e.target.value)}
                            className={tableInputClass}
                          >
                            {yearLevelOptions.map(level => (
                              <option key={level} value={level}>
                                Y{level}{level === '1' ? ' (0.5)' : ''}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="text-center">
                          <button
                            type="button"
                            onClick={() => removeSubject(s.id)}
                            disabled={subjects.length <= 1}
                            className="calc-btn-icon mx-auto"
                            aria-label={`Remove unit ${i + 1}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="calc-toolbar flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCheckResult}
                  className="flex-1 py-3.5 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Calculator size={18} />
                  <span>Check Result & Calculate WAM →</span>
                </button>
                <button type="button" onClick={addSubject} className="calc-btn-primary">
                  <Plus size={16} aria-hidden />
                  Add Subject
                </button>
                <button type="button" onClick={reset} className="calc-btn-secondary">
                  <RotateCcw size={16} aria-hidden />
                  Reset
                </button>
              </div>
            </div>

            <div className="calc-grade-panel">
              <h3 className="text-sm font-semibold tracking-tight text-gray-800 dark:text-gray-200">
                Uni Grade Reference
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Mark ranges and grade bands at Uni</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  { range: '80–100', grade: 'HD', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' },
                  { range: '70–79', grade: 'D', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                  { range: '60–69', grade: 'C', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300' },
                  { range: '50–59', grade: 'P', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
                  { range: '0–49', grade: 'N', color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
                ].map(g => (
                  <div key={g.grade} className={`rounded-xl px-2 py-2.5 text-center shadow-premium-sm ${g.color}`}>
                    <div className="text-sm font-bold">{g.grade}</div>
                    <div className="mt-0.5 text-[11px] opacity-90">{g.range}</div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          <aside className="calc-result-aside">
            <div className={resultCardClass}>
              <div className={`calc-result-header ${isHomeShell ? 'md:rounded-t-3xl' : ''}`}>
                <div className="flex items-center gap-2 text-sm font-medium text-primary-100">
                  <TrendingUp size={17} aria-hidden />
                  Your WAM Results
                </div>
                {isSubmitted && result ? (
                  <>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-200">
                      Official WAM
                    </p>
                    <p className="mt-1 text-5xl font-bold tracking-tight text-white">{result.officialWam.toFixed(2)}</p>
                    <p className="mt-2 text-sm font-semibold text-white/95">
                      {result.grade} — {result.gradeLabel}
                    </p>
                    {result.planningWam !== result.officialWam && (
                      <p className="mt-2 text-xs text-primary-100/90">
                        Planning WAM: {result.planningWam.toFixed(2)}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-200">
                      Official WAM
                    </p>
                    <p className="mt-1 text-4xl font-bold tracking-tight text-primary-200/80">—</p>
                    <p className="mt-2 text-sm text-primary-100/80">Waiting for valid unit marks</p>
                  </>
                )}
              </div>

              <div className="space-y-4 px-5 py-5 sm:px-6">
                {result ? (
                  <>
                    <div className="space-y-2.5">
                      {result.planningWam !== result.officialWam && (
                        <ResultRow label="Planning WAM" value={result.planningWam.toFixed(2)} />
                      )}
                      <ResultRow label="Total Credit Points" value={String(result.totalCredits)} />
                      <ResultRow label="Total Subjects" value={String(result.totalSubjects)} />
                      <ResultRow label="Average Mark" value={`${result.avgMark.toFixed(2)}%`} />
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      Official WAM uses Uni year-level weighting (Year 1 = 0.5, Year 2+ = 1.0). Planning WAM is
                      simple credit-weighted maths. Verify special grades and exclusions on WES.
                    </p>
                    <button type="button" onClick={copyResult} className="calc-btn-copy">
                      {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                      {copied ? 'Copied!' : 'Copy Result'}
                    </button>
                  </>
                ) : (
                  <div className="calc-empty-state">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                      <Calculator size={22} aria-hidden />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Enter marks to see your WAM
                    </p>
                    <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      Add at least one unit with a final mark and credit points. Results update instantly as you type.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>

        </div>

        <a href="/wam-to-gpa-calculator" className="calc-gpa-promo-banner group">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">Need to convert WAM to GPA?</p>
            <p className="mt-1 text-xs leading-relaxed text-blue-700/90 dark:text-blue-300/90">
              Free Uni converter for 4.0 and 7.0 GPA scales.
            </p>
          </div>
          <span className="calc-gpa-promo-link">
            Open WAM to GPA Calculator →
          </span>
        </a>
        </div>
      </section>
      <AmazonResultPopUpModal hasResult={!!result} />
    </>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="calc-result-row">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-100">{value}</span>
    </div>
  );
}
