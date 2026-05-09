import { useState, useCallback, useEffect, useRef, type KeyboardEvent } from 'react';
import { Plus, Trash2, RotateCcw, Copy, Check, TrendingUp } from 'lucide-react';
import ProductPopup from './ProductPopup';
import { Recommendation, evaluateRecommendationTrigger } from '../utils/recommendationEngine';
import { unitSubjectCatalog } from '../data/unitSubjectCatalog';

interface Subject {
  id: number;
  unit: string;
  subject: string;
  mark: string;
  credits: string;
}

interface SuggestionState {
  rowId: number;
  field: 'unit' | 'subject';
  items: string[];
  activeIndex: number;
}

interface WAMResult {
  wam: number;
  totalCredits: number;
  totalSubjects: number;
  avgMark: number;
  grade: string;
  gradeLabel: string;
  gradeColor: string;
}

function getGrade(wam: number): { grade: string; label: string; color: string } {
  if (wam >= 80) return { grade: 'HD', label: 'High Distinction', color: 'text-emerald-600 dark:text-emerald-400' };
  if (wam >= 70) return { grade: 'D', label: 'Distinction', color: 'text-blue-600 dark:text-blue-400' };
  if (wam >= 60) return { grade: 'C', label: 'Credit', color: 'text-sky-600 dark:text-sky-400' };
  if (wam >= 50) return { grade: 'P', label: 'Pass', color: 'text-amber-600 dark:text-amber-400' };
  return { grade: 'N', label: 'Fail', color: 'text-red-600 dark:text-red-400' };
}

let nextId = 4;

const unitToSubject = new Map(
  unitSubjectCatalog.map(item => [item.unitCode.toUpperCase(), item.specificSubject])
);

const subjectToUnits = new Map<string, string[]>();
for (const item of unitSubjectCatalog) {
  const key = item.specificSubject.trim().toLowerCase();
  const current = subjectToUnits.get(key) ?? [];
  current.push(item.unitCode.toUpperCase());
  subjectToUnits.set(key, current);
}

const unitOptions = Array.from(new Set(unitSubjectCatalog.map(item => item.unitCode.toUpperCase())));
const subjectOptions = Array.from(new Set(unitSubjectCatalog.map(item => item.specificSubject)));

function matchSubjectByUnit(unitCode: string): string | null {
  const normalized = unitCode.trim().toUpperCase();
  return normalized ? unitToSubject.get(normalized) ?? null : null;
}

function matchUnitBySubject(specificSubject: string): string | null {
  const normalized = specificSubject.trim().toLowerCase();
  const matches = subjectToUnits.get(normalized);
  return matches && matches.length > 0 ? matches[0] : null;
}

function getSmartSuggestions(options: string[], query: string, limit = 10): string[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return options.slice(0, limit);

  const startsWith = options.filter(item => item.toLowerCase().startsWith(normalized));
  const contains = options.filter(
    item => item.toLowerCase().includes(normalized) && !item.toLowerCase().startsWith(normalized)
  );
  return [...startsWith, ...contains].slice(0, limit);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderHighlightedSuggestion(value: string, query: string) {
  if (!query.trim()) return value;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'ig');
  const parts = value.split(regex);
  const normalizedQuery = query.toLowerCase();
  return parts.map((part, index) => (
    part.toLowerCase() === normalizedQuery
      ? <mark key={`${part}-${index}`} className="bg-amber-100 dark:bg-amber-500/30 text-inherit rounded px-0.5">{part}</mark>
      : <span key={`${part}-${index}`}>{part}</span>
  ));
}

const defaultSubjects: Subject[] = [
  { id: 1, unit: 'FIT1045', subject: matchSubjectByUnit('FIT1045') ?? '', mark: '80', credits: '6' },
  { id: 2, unit: 'MAT1830', subject: matchSubjectByUnit('MAT1830') ?? '', mark: '75', credits: '6' },
  { id: 3, unit: 'ENG1005', subject: matchSubjectByUnit('ENG1005') ?? '', mark: '70', credits: '6' },
];

interface WAMCalculatorProps {
  /** Hide recommendation popup (e.g. article iframe embeds) */
  embedSuppressRecommendations?: boolean;
}

export default function WAMCalculator({ embedSuppressRecommendations = false }: WAMCalculatorProps) {
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
  const [copied, setCopied] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [suggestionState, setSuggestionState] = useState<SuggestionState | null>(null);
  const popupTimerRef = useRef<number | null>(null);

  const calculateWAM = useCallback((): WAMResult | null => {
    const valid = subjects.filter(s => s.mark !== '' && s.credits !== '');
    if (valid.length === 0) return null;

    let totalWeighted = 0;
    let totalCredits = 0;
    let totalMark = 0;

    for (const s of valid) {
      const mark = parseFloat(s.mark);
      const credits = parseFloat(s.credits);
      if (isNaN(mark) || isNaN(credits) || credits <= 0) continue;
      totalWeighted += mark * credits;
      totalCredits += credits;
      totalMark += mark;
    }

    if (totalCredits === 0) return null;

    const wam = totalWeighted / totalCredits;
    const avgMark = totalMark / valid.length;
    const { grade, label, color } = getGrade(wam);

    return {
      wam: Math.round(wam * 100) / 100,
      totalCredits,
      totalSubjects: valid.length,
      avgMark: Math.round(avgMark * 100) / 100,
      grade,
      gradeLabel: label,
      gradeColor: color,
    };
  }, [subjects]);

  const result = calculateWAM();

  const addSubject = () => {
    setSubjects(prev => [...prev, { id: nextId++, unit: '', subject: '', mark: '', credits: '6' }]);
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
        }

        if (field === 'subject') {
          const matchedUnit = matchUnitBySubject(normalizedValue);
          if (matchedUnit) next.unit = matchedUnit;
        }

        return next;
      })
    );
  };

  const openSuggestions = (rowId: number, field: 'unit' | 'subject', value: string) => {
    const source = field === 'unit' ? unitOptions : subjectOptions;
    const items = getSmartSuggestions(source, value);
    setSuggestionState({ rowId, field, items, activeIndex: items.length > 0 ? 0 : -1 });
  };

  const closeSuggestions = () => setSuggestionState(null);

  const selectSuggestion = (rowId: number, field: 'unit' | 'subject', value: string) => {
    updateSubject(rowId, field, value);
    closeSuggestions();
  };

  const handleSuggestionKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    rowId: number,
    field: 'unit' | 'subject',
    currentValue: string
  ) => {
    const source = field === 'unit' ? unitOptions : subjectOptions;
    const current = suggestionState && suggestionState.rowId === rowId && suggestionState.field === field
      ? suggestionState
      : { rowId, field, items: getSmartSuggestions(source, currentValue), activeIndex: 0 };

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextItems = current.items.length > 0 ? current.items : getSmartSuggestions(source, currentValue);
      if (nextItems.length === 0) return;
      const nextIndex = current.activeIndex < nextItems.length - 1 ? current.activeIndex + 1 : 0;
      setSuggestionState({ rowId, field, items: nextItems, activeIndex: nextIndex });
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const nextItems = current.items.length > 0 ? current.items : getSmartSuggestions(source, currentValue);
      if (nextItems.length === 0) return;
      const nextIndex = current.activeIndex > 0 ? current.activeIndex - 1 : nextItems.length - 1;
      setSuggestionState({ rowId, field, items: nextItems, activeIndex: nextIndex });
      return;
    }

    if (event.key === 'Enter' && suggestionState && suggestionState.rowId === rowId && suggestionState.field === field) {
      const selected = suggestionState.items[suggestionState.activeIndex];
      if (selected) {
        event.preventDefault();
        selectSuggestion(rowId, field, selected);
      }
      return;
    }

    if (event.key === 'Escape') {
      closeSuggestions();
    }
  };

  const renderSuggestions = (rowId: number, field: 'unit' | 'subject', query: string) => {
    if (!suggestionState || suggestionState.rowId !== rowId || suggestionState.field !== field || suggestionState.items.length === 0) {
      return null;
    }

    return (
      <div className="absolute left-0 right-0 bottom-full mb-1 z-30 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-56 overflow-y-auto">
        {suggestionState.items.map((option, optionIndex) => (
          <button
            key={option}
            type="button"
            onMouseDown={() => selectSuggestion(rowId, field, option)}
            className={`w-full text-left px-3 py-2 text-xs ${
              suggestionState.activeIndex === optionIndex
                ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {renderHighlightedSuggestion(option, query)}
          </button>
        ))}
      </div>
    );
  };

  const reset = () => {
    setSubjects([
      { id: 1, unit: '', subject: '', mark: '', credits: '6' },
      { id: 2, unit: '', subject: '', mark: '', credits: '6' },
    ]);
  };

  const copyResult = async () => {
    if (!result) return;
    const text = `Monash WAM: ${result.wam.toFixed(2)} | Grade: ${result.grade} (${result.gradeLabel}) | Credits: ${result.totalCredits} | Subjects: ${result.totalSubjects}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateMark = (val: string) => {
    const n = parseFloat(val);
    return val === '' || (n >= 0 && n <= 100);
  };

  useEffect(() => {
    if (embedSuppressRecommendations) return;
    // Only trigger from newly added subject rows after user fills all required fields.
    const addedSubjects = subjects.slice(defaultSubjects.length);
    const hasCompletedAddedSubject = addedSubjects.some(
      s => (s.unit.trim() !== '' || s.subject.trim() !== '') && s.credits.trim() !== '' && s.mark.trim() !== ''
    );
    const hasResult = result !== null;

    if (!hasCompletedAddedSubject || !hasResult) {
      if (popupTimerRef.current !== null) {
        window.clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
      return;
    }

    if (popupTimerRef.current !== null) {
      window.clearTimeout(popupTimerRef.current);
    }

    popupTimerRef.current = window.setTimeout(() => {
      const rec = evaluateRecommendationTrigger({
        route: '/',
        subjects: subjects.map(s => ({
          code: s.unit.trim() || s.subject.trim(),
          mark: s.mark === '' ? null : parseFloat(s.mark),
        })),
      });

      if (rec) {
        setRecommendation(rec);
        setPopupOpen(true);
      }
      popupTimerRef.current = null;
    }, 3000);

    return () => {
      if (popupTimerRef.current !== null) {
        window.clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
    };
  }, [subjects, result, embedSuppressRecommendations]);

  return (
    <>
      <section id="calculator" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Calculate Your Monash WAM</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Enter your subject marks and credit points below to instantly calculate your Weighted Average Mark (WAM).
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start" data-article-tool-screenshot="monash-wam">
          <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="md:hidden p-3 space-y-3">
                {subjects.map((s, i) => (
                  <div key={`mobile-${s.id}`} className="rounded-xl border border-gray-200 dark:border-gray-700 p-3 space-y-3">
                    <div className="grid grid-cols-1 gap-3">
                      <label className="block">
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Unit Name</span>
                        <div className="relative mt-1">
                          <input
                            type="text"
                            placeholder={`e.g. FIT${1000 + i}`}
                            value={s.unit}
                            onChange={e => {
                              updateSubject(s.id, 'unit', e.target.value);
                              openSuggestions(s.id, 'unit', e.target.value);
                            }}
                            onFocus={e => openSuggestions(s.id, 'unit', e.target.value)}
                            onBlur={() => window.setTimeout(closeSuggestions, 120)}
                            onKeyDown={e => handleSuggestionKeyDown(e, s.id, 'unit', s.unit)}
                            className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                          />
                          {renderSuggestions(s.id, 'unit', s.unit)}
                        </div>
                      </label>

                      <label className="block">
                        <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Subject</span>
                        <div className="relative mt-1">
                          <input
                            type="text"
                            placeholder="e.g. Introduction to Programming"
                            value={s.subject}
                            onChange={e => {
                              updateSubject(s.id, 'subject', e.target.value);
                              openSuggestions(s.id, 'subject', e.target.value);
                            }}
                            onFocus={e => openSuggestions(s.id, 'subject', e.target.value)}
                            onBlur={() => window.setTimeout(closeSuggestions, 120)}
                            onKeyDown={e => handleSuggestionKeyDown(e, s.id, 'subject', s.subject)}
                            className="w-full h-11 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"
                          />
                          {renderSuggestions(s.id, 'subject', s.subject)}
                        </div>
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
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="bg-primary-50 dark:bg-primary-900/30 border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[130px]">Unit Name</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[190px]">Subject</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Final Mark (%)</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Credit Points</th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {subjects.map((s, i) => (
                      <tr key={s.id} className="group hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                        <td className="px-4 py-3 relative min-w-[130px]">
                          <input
                            type="text"
                            placeholder={`e.g. FIT${1000 + i}`}
                            value={s.unit}
                            onChange={e => {
                              updateSubject(s.id, 'unit', e.target.value);
                              openSuggestions(s.id, 'unit', e.target.value);
                            }}
                            onFocus={e => openSuggestions(s.id, 'unit', e.target.value)}
                            onBlur={() => window.setTimeout(closeSuggestions, 120)}
                            onKeyDown={e => handleSuggestionKeyDown(e, s.id, 'unit', s.unit)}
                            className="w-full min-w-[110px] bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                          {renderSuggestions(s.id, 'unit', s.unit)}
                        </td>
                        <td className="px-4 py-3 relative min-w-[190px]">
                          <input
                            type="text"
                            placeholder="e.g. Introduction to Programming"
                            value={s.subject}
                            onChange={e => {
                              updateSubject(s.id, 'subject', e.target.value);
                              openSuggestions(s.id, 'subject', e.target.value);
                            }}
                            onFocus={e => openSuggestions(s.id, 'subject', e.target.value)}
                            onBlur={() => window.setTimeout(closeSuggestions, 120)}
                            onKeyDown={e => handleSuggestionKeyDown(e, s.id, 'subject', s.subject)}
                            className="w-full min-w-[170px] bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary-400 rounded px-1 py-0.5"
                          />
                          {renderSuggestions(s.id, 'subject', s.subject)}
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

          <div className="lg:sticky lg:top-24 w-full lg:w-72 shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-5">
                <div className="flex items-center gap-2 text-primary-100 text-sm font-medium mb-1">
                  <TrendingUp size={16} />
                  Your WAM Results
                </div>
                {result ? (
                  <>
                    <div className="text-5xl font-bold text-white mt-1">{result.wam.toFixed(2)}</div>
                    <div className={`text-sm font-semibold mt-1 ${result.gradeColor} text-white opacity-90`}>
                      {result.grade} — {result.gradeLabel}
                    </div>
                  </>
                ) : (
                  <div className="text-3xl font-bold text-primary-200 mt-1">—</div>
                )}
              </div>

              <div className="px-6 py-5 space-y-4">
                {result ? (
                  <>
                    <div className="space-y-3">
                      <ResultRow label="Current WAM" value={result.wam.toFixed(2)} />
                      <ResultRow label="Total Credit Points" value={String(result.totalCredits)} />
                      <ResultRow label="Total Subjects" value={String(result.totalSubjects)} />
                      <ResultRow label="Average Mark" value={`${result.avgMark.toFixed(2)}%`} />
                      <div className="flex justify-between items-center py-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Grade Standing</span>
                        <span className={`text-sm font-bold ${result.gradeColor}`}>{result.grade} — {result.gradeLabel}</span>
                      </div>
                    </div>
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

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-2">Need to convert WAM to GPA?</p>
              <a
                href="/wam-to-gpa-calculator"
                className="block text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
              >
                Open WAM to GPA Calculator →
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
      {!embedSuppressRecommendations && (
        <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
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
