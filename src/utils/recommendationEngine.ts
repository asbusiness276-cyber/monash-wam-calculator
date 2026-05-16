import catalog from '../data/products-data.json';
import { getArticleBySlug } from '../data/articles';

export interface ProductInfo {
  name: string;
  image: string;
  url: string;
  price: string;
  description?: string;
}

export interface Recommendation {
  title: string;
  message: string;
  products: {
    weak: ProductInfo;
    strong: ProductInfo;
  };
  subjectType: string;
  strength: 'weak' | 'strong';
}

export interface CalculatorSubjectInput {
  code?: string;
  mark?: number | null;
}

interface CatalogRange {
  min: number;
  max: number;
  raw: string;
}

interface CatalogProduct {
  name: string;
  image: string;
  url: string;
  price: string;
}

interface CatalogBand {
  range: CatalogRange;
  status: string;
  message: string;
  bestBook: string;
  product: CatalogProduct;
}

interface CatalogItem {
  id: number;
  subjectType: string;
  keywords: string[];
  weak: CatalogBand;
  strong: CatalogBand;
}

const data = catalog as CatalogItem[];
const STORAGE_KEY = 'lastCalculatorState';
const POPUP_TIME_KEY = 'lastPopupTimestamp';
const POPUP_COOLDOWN_MS = 45_000;

export function getShowcaseProducts(startInclusive: number, endInclusive: number): ProductInfo[] {
  return data
    .filter(item => item.id >= startInclusive && item.id <= endInclusive)
    .map(item => ({
      ...item.weak.product,
      description: item.weak.bestBook,
    }));
}

function normalizeCode(value: string): string {
  return value.trim().toUpperCase();
}

function matchSubject(item: CatalogItem, code: string): boolean {
  if (!code) return false;
  const normalized = normalizeCode(code);
  return item.keywords.some(keyword => {
    const k = normalizeCode(keyword);
    return normalized.startsWith(k) || normalized.includes(k);
  });
}

function chooseCatalogItem(subjects: CalculatorSubjectInput[], fallbackKeyword?: string): CatalogItem {
  const codes = subjects.map(s => normalizeCode(s.code || '')).filter(Boolean);
  for (const code of codes) {
    const match = data.find(item => matchSubject(item, code));
    if (match) return match;
  }
  if (fallbackKeyword) {
    const keyword = normalizeCode(fallbackKeyword);
    const match = data.find(item => item.keywords.some(k => normalizeCode(k) === keyword));
    if (match) return match;
  }
  return data[0];
}

function inRange(mark: number, range: CatalogRange): boolean {
  return mark >= range.min && mark <= range.max;
}

function buildStateSnapshot(route: string, subjects: CalculatorSubjectInput[]): string {
  const normalized = {
    route,
    subjects: subjects.map(s => ({
      code: normalizeCode(s.code || ''),
      mark: typeof s.mark === 'number' && !Number.isNaN(s.mark) ? Math.round(s.mark * 10) / 10 : null,
    })),
  };
  return JSON.stringify(normalized);
}

function parseState(raw: string | null): { route: string; subjects: Array<{ code: string; mark: number | null }> } | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function shouldTriggerPopup(previousRaw: string | null, currentRaw: string): boolean {
  const previous = parseState(previousRaw);
  const current = parseState(currentRaw);
  if (!current) return false;
  if (!previous) return true;

  if (previous.subjects.length !== current.subjects.length) return true;

  const codeChanged = current.subjects.some((s, i) => s.code !== previous.subjects[i]?.code);
  if (codeChanged) return true;

  const significantMarkChange = current.subjects.some((s, i) => {
    const oldMark = previous.subjects[i]?.mark;
    if (s.mark === null || oldMark === null) return false;
    return Math.abs(s.mark - oldMark) >= 10;
  });

  return significantMarkChange;
}

function buildRecommendation(subjects: CalculatorSubjectInput[], route: string): Recommendation | null {
  const validMarks = subjects
    .map(s => ({ code: s.code || '', mark: typeof s.mark === 'number' ? s.mark : null }))
    .filter(s => s.mark !== null) as Array<{ code: string; mark: number }>;

  if (validMarks.length === 0) return null;

  const fallbackByRoute: Record<string, string> = {
    '/wam-to-gpa-calculator': 'FIT',
    '/gpa-to-wam-calculator': 'MAT',
    '/final-grade-calculator': 'ENG',
    '/': 'FIT',
  };

  const item = chooseCatalogItem(validMarks, fallbackByRoute[route]);

  let selected = validMarks[0];
  const codeMatched = validMarks.find(v => matchSubject(item, v.code));
  if (codeMatched) selected = codeMatched;

  const isWeak = inRange(selected.mark, item.weak.range);
  const band = isWeak ? item.weak : item.strong;

  return {
    title: 'Recommended For You',
    message: band.message,
    products: {
      weak: {
        ...item.weak.product,
        description: item.weak.bestBook,
      },
      strong: {
        ...item.strong.product,
        description: item.strong.bestBook,
      },
    },
    subjectType: item.subjectType,
    strength: isWeak ? 'weak' : 'strong',
  };
}

export function evaluateRecommendationTrigger(params: {
  route: string;
  subjects: CalculatorSubjectInput[];
}): Recommendation | null {
  if (typeof window === 'undefined') return null;

  const currentSnapshot = buildStateSnapshot(params.route, params.subjects);
  const previousSnapshot = localStorage.getItem(STORAGE_KEY);
  const now = Date.now();
  const lastPopupAt = Number(localStorage.getItem(POPUP_TIME_KEY) || 0);

  localStorage.setItem(STORAGE_KEY, currentSnapshot);

  if (!shouldTriggerPopup(previousSnapshot, currentSnapshot)) return null;
  if (now - lastPopupAt < POPUP_COOLDOWN_MS) return null;

  const recommendation = buildRecommendation(params.subjects, params.route);
  if (!recommendation) return null;

  localStorage.setItem(POPUP_TIME_KEY, String(now));
  return recommendation;
}

export interface ArticleSideRecommendations {
  subjectType: string;
  left: ProductInfo;
  right: ProductInfo;
  /** Extra desktop-only rail product (neighbor catalog, weak band). */
  leftSecondary: ProductInfo | null;
  /** Extra desktop-only rail product (neighbor catalog, strong band). */
  rightSecondary: ProductInfo | null;
  leftCaption: string;
  rightCaption: string;
  leftSecondaryCaption: string;
  rightSecondaryCaption: string;
}

function toProductInfo(band: CatalogBand): ProductInfo {
  return { ...band.product, description: band.bestBook };
}

function getNeighborCatalogItem(primaryId: number, offset: number): CatalogItem | null {
  const sorted = [...data].sort((a, b) => a.id - b.id);
  const index = sorted.findIndex(entry => entry.id === primaryId);
  if (index === -1) return sorted[0] ?? null;
  return sorted[(index + offset + sorted.length) % sorted.length] ?? null;
}

const ARTICLE_RAIL_SESSION_PREFIX = 'articleProductRail-';

function buildArticleSearchText(slug: string): string {
  const article = getArticleBySlug(slug);
  if (!article) return slug.replace(/-/g, ' ');

  const sectionText = article.sections
    .map(section => `${section.heading} ${section.paragraphs.join(' ')}`)
    .join(' ');

  return `${article.title} ${article.keyword} ${article.description} ${sectionText}`.toLowerCase();
}

/** Picks a catalog row for any article slug (explicit id, keyword match, or stable fallback). */
export function resolveArticleCatalogId(slug: string): number {
  const article = getArticleBySlug(slug);
  if (article?.productCatalogId) return article.productCatalogId;

  const haystack = buildArticleSearchText(slug);
  const keywordMatch = data.find(item =>
    item.keywords.some(keyword => haystack.includes(keyword.toLowerCase()))
  );
  if (keywordMatch) return keywordMatch.id;

  const sortedIds = [...data].map(item => item.id).sort((a, b) => a - b);
  const hash = slug.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return sortedIds[hash % sortedIds.length] ?? sortedIds[0] ?? 1;
}

export function getArticleSideRecommendations(slug: string): ArticleSideRecommendations | null {
  const catalogId = resolveArticleCatalogId(slug);
  const item = data.find(entry => entry.id === catalogId) ?? data[0];
  if (!item) return null;

  const prevItem = getNeighborCatalogItem(catalogId, -1);
  const nextItem = getNeighborCatalogItem(catalogId, 1);

  return {
    subjectType: item.subjectType,
    left: toProductInfo(item.weak),
    right: toProductInfo(item.strong),
    leftSecondary: prevItem ? toProductInfo(prevItem.weak) : null,
    rightSecondary: nextItem ? toProductInfo(nextItem.strong) : null,
    leftCaption: 'Recommended for building fundamentals',
    rightCaption: 'Recommended for advancing further',
    leftSecondaryCaption: prevItem
      ? `Also helpful for ${prevItem.subjectType.toLowerCase()}`
      : 'Also recommended',
    rightSecondaryCaption: nextItem
      ? `Also helpful for ${nextItem.subjectType.toLowerCase()}`
      : 'Also recommended',
  };
}

export function wasArticleRailDismissed(slug: string): boolean {
  if (typeof sessionStorage === 'undefined') return false;
  return sessionStorage.getItem(`${ARTICLE_RAIL_SESSION_PREFIX}${slug}`) === '1';
}

export function markArticleRailDismissed(slug: string): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(`${ARTICLE_RAIL_SESSION_PREFIX}${slug}`, '1');
}
