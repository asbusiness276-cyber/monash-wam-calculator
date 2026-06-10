import { unitSubjectCatalog } from '../data/unitSubjectCatalog';

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

export const unitOptions = Array.from(new Set(unitSubjectCatalog.map(item => item.unitCode.toUpperCase())));
export const subjectOptions = Array.from(new Set(unitSubjectCatalog.map(item => item.specificSubject)));

export function matchSubjectByUnit(unitCode: string): string | null {
  const normalized = unitCode.trim().toUpperCase();
  return normalized ? unitToSubject.get(normalized) ?? null : null;
}

export function matchUnitBySubject(specificSubject: string): string | null {
  const normalized = specificSubject.trim().toLowerCase();
  const matches = subjectToUnits.get(normalized);
  return matches && matches.length > 0 ? matches[0] : null;
}

export function getSmartSuggestions(options: string[], query: string, limit = 10): string[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return options.slice(0, limit);

  const startsWith = options.filter(item => item.toLowerCase().startsWith(normalized));
  const contains = options.filter(
    item => item.toLowerCase().includes(normalized) && !item.toLowerCase().startsWith(normalized)
  );
  return [...startsWith, ...contains].slice(0, limit);
}

export function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
