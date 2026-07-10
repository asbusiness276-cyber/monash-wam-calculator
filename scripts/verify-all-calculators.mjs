/**
 * Full calculator verification — route integrity + maths spot checks.
 * Run: node scripts/verify-all-calculators.mjs
 */
import { readFileSync } from 'fs';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) {
    failed += 1;
    console.error(`  ✗ ${message}`);
    return;
  }
  passed += 1;
  console.log(`  ✓ ${message}`);
}

function test(name, fn) {
  console.log(`\n${name}`);
  try {
    fn();
  } catch (error) {
    failed += 1;
    console.error(`  ✗ threw: ${error.message}`);
  }
}

// --- Mirror monashGrades (keep in sync with src/utils/monashGrades.ts) ---
const gradeBands = [
  { grade: 'HD', gpa4: 4.0, gpa7: 7.0, min: 80, max: 100 },
  { grade: 'D', gpa4: 3.0, gpa7: 6.0, min: 70, max: 79 },
  { grade: 'C', gpa4: 2.0, gpa7: 5.0, min: 60, max: 69 },
  { grade: 'P', gpa4: 1.0, gpa7: 4.0, min: 50, max: 59 },
  { grade: 'N', gpa4: 0.0, gpa7: 0.0, min: 0, max: 49 },
];

function getMonashGradeFromMark(mark) {
  if (Number.isNaN(mark) || mark < 0 || mark > 100) return null;
  return gradeBands.find(b => mark >= b.min && mark <= b.max) ?? null;
}

function mapGpaToMonashBand(gpa, scaleMax) {
  if (Number.isNaN(gpa) || gpa < 0 || gpa > scaleMax) return null;
  const thresholds =
    scaleMax === 4
      ? [
          { min: 3.5, grade: 'HD', wamMin: 80, wamMax: 100 },
          { min: 2.5, grade: 'D', wamMin: 70, wamMax: 79 },
          { min: 1.5, grade: 'C', wamMin: 60, wamMax: 69 },
          { min: 0.5, grade: 'P', wamMin: 50, wamMax: 59 },
          { min: 0, grade: 'N', wamMin: 0, wamMax: 49 },
        ]
      : [
          { min: 6.5, grade: 'HD', wamMin: 80, wamMax: 100 },
          { min: 5.5, grade: 'D', wamMin: 70, wamMax: 79 },
          { min: 4.5, grade: 'C', wamMin: 60, wamMax: 69 },
          { min: 3.5, grade: 'P', wamMin: 50, wamMax: 59 },
          { min: 0, grade: 'N', wamMin: 0, wamMax: 49 },
        ];
  return thresholds.find(e => gpa >= e.min) ?? null;
}

function convertGpaBetweenScales(gpa, fromScale, toScale) {
  const band = mapGpaToMonashBand(gpa, fromScale);
  if (!band) return null;
  const info = gradeBands.find(g => g.grade === band.grade);
  return toScale === 4 ? info.gpa4 : info.gpa7;
}

function calculateCgpaFromSemesterGpa(priorCgpa, priorCredits, semesterGpa, semesterCredits) {
  if (semesterCredits <= 0 || priorCredits < 0) return null;
  const total = priorCredits + semesterCredits;
  if (total === 0) return null;
  return Math.round(((priorCgpa * priorCredits + semesterGpa * semesterCredits) / total) * 1000) / 1000;
}

function convert10PointCgpaToGpa4(cgpa10) {
  if (cgpa10 < 0 || cgpa10 > 10) return null;
  return Math.round((cgpa10 / 10) * 4 * 1000) / 1000;
}

function convert10PointGpaToWamBand(gpa10) {
  if (gpa10 < 0 || gpa10 > 10) return null;
  return getMonashGradeFromMark(gpa10 * 10);
}

const atarBands = [
  { atarMin: 95, atarMax: 99.95, wamMin: 85, wamMax: 100, gpa4: 4.0 },
  { atarMin: 90, atarMax: 94.99, wamMin: 80, wamMax: 84, gpa4: 4.0 },
  { atarMin: 85, atarMax: 89.99, wamMin: 75, wamMax: 79, gpa4: 3.0 },
  { atarMin: 80, atarMax: 84.99, wamMin: 70, wamMax: 74, gpa4: 3.0 },
];

function convertAtarToPlanningBands(atar) {
  if (atar < 0 || atar > 99.95) return null;
  return atarBands.find(b => atar >= b.atarMin && atar <= b.atarMax) ?? null;
}

function convertWamToAtarRange(wam) {
  if (wam < 0 || wam > 100) return null;
  const band = atarBands.find(b => wam >= b.wamMin && wam <= b.wamMax);
  if (band) return { atarMin: band.atarMin, atarMax: band.atarMax };
  if (wam >= 85) return { atarMin: 95, atarMax: 99.95 };
  if (wam >= 80) return { atarMin: 90, atarMax: 94.99 };
  return { atarMin: 0, atarMax: 49.99 };
}

function calculateHighSchoolGpa(courses, weighted) {
  let sum = 0;
  let credits = 0;
  for (const c of courses) {
    const pts = weighted ? Math.min(c.gradePoints + 1, 5) : c.gradePoints;
    sum += pts * c.credits;
    credits += c.credits;
  }
  if (!credits) return null;
  return Math.round((sum / credits) * 1000) / 1000;
}

const monashOfficialGpa = { HD: 4.0, D: 3.0, C: 2.0, P: 1.0, N: 0.3 };

function calculateMonashOfficialGpa(units) {
  let points = 0;
  let credits = 0;
  for (const u of units) {
    points += monashOfficialGpa[u.grade] * u.credits;
    credits += u.credits;
  }
  if (!credits) return null;
  return Math.round((points / credits) * 1000) / 1000;
}

// --- Route / catalog integrity ---
const catalogHrefs = [
  '/',
  '/semester-wam-calculator',
  '/wam-projection-calculator',
  '/wam-target-calculator',
  '/wam-milestones-calculator',
  '/monash-official-wam-calculator',
  '/degree-progress-calculator',
  '/wam-to-gpa-calculator',
  '/wam-to-4-0-gpa-calculator',
  '/wam-to-7-0-gpa-calculator',
  '/wam-to-cgpa-calculator',
  '/gpa-to-wam-calculator',
  '/4-0-gpa-to-wam-calculator',
  '/7-0-gpa-to-wam-calculator',
  '/cgpa-to-wam-calculator',
  '/gpa-to-percentage-calculator',
  '/4-0-to-7-0-gpa-calculator',
  '/7-0-to-4-0-gpa-calculator',
  '/gpa-calculator',
  '/4-0-gpa-calculator',
  '/semester-gpa-calculator',
  '/gpa-to-cgpa-calculator',
  '/cgpa-to-gpa-calculator',
  '/10-point-gpa-to-wam-calculator',
  '/atar-to-gpa-wam-calculator',
  '/high-school-gpa-calculator',
  '/monash-gpa-calculator',
  '/monash-cgpa-calculator',
  '/monash-target-gpa-calculator',
  '/monash-grade-converter',
  '/mark-to-grade-calculator',
  '/percentage-to-gpa-calculator',
  '/7-0-scale-gpa-calculator',
  '/grade-average-calculator',
  '/weighted-average-calculator',
  '/final-grade-calculator',
  '/unit-mark-calculator',
  '/unit-target-calculator',
  '/pass-mark-calculator',
  '/monash-distinction-average-calculator',
  '/monash-scholarship-wam-calculator',
  '/monash-honours-calculator',
  '/monash-deans-honours-calculator',
  '/failed-unit-wam-calculator',
  '/withdrawn-fail-impact-calculator',
  '/supp-repeat-wam-calculator',
  '/monash-exchange-wam-calculator',
];

test('Catalog: all calculator routes wired in App.tsx', () => {
  const app = readFileSync('src/App.tsx', 'utf8');
  assert(catalogHrefs.length === 47, `expected 47 calculators, list has ${catalogHrefs.length}`);
  for (const href of catalogHrefs) {
    const routeCheck = href === '/' ? "path === '/'" : `path === '${href}'`;
    assert(app.includes(routeCheck), `App.tsx routes ${href}`);
  }
});

test('Sitemap: all calculator URLs present', () => {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');
  for (const href of catalogHrefs.filter(h => h !== '/')) {
    assert(sitemap.includes(`monashwamcalculator.com${href}`), `sitemap includes ${href}`);
  }
});

// --- WAM ↔ GPA family ---
test('WAM to GPA: band boundaries', () => {
  assert(getMonashGradeFromMark(80).gpa4 === 4.0, 'WAM 80 → GPA 4.0');
  assert(getMonashGradeFromMark(79).gpa4 === 3.0, 'WAM 79 → GPA 3.0');
  assert(getMonashGradeFromMark(49).gpa4 === 0.0, 'WAM 49 → GPA 0.0');
  assert(getMonashGradeFromMark(76).gpa7 === 6.0, 'WAM 76 → GPA 7.0 scale 6.0');
});

test('GPA to WAM: 3.5 maps to HD not D', () => {
  const band = mapGpaToMonashBand(3.5, 4);
  assert(band.grade === 'HD', 'GPA 3.5 is HD band');
  assert(band.wamMin === 80, 'HD wamMin 80');
});

test('GPA to WAM: 7.0 scale 5.5 is D', () => {
  const band = mapGpaToMonashBand(5.5, 7);
  assert(band.grade === 'D', 'GPA 5.5 is D on 7.0');
});

test('Scale conversion: 4.0 ↔ 7.0', () => {
  assert(convertGpaBetweenScales(3.0, 4, 7) === 6.0, '3.0 → 6.0');
  assert(convertGpaBetweenScales(6.0, 7, 4) === 3.0, '6.0 → 3.0');
  assert(convertGpaBetweenScales(4.0, 4, 7) === 7.0, '4.0 → 7.0');
});

test('GPA to percentage midpoint', () => {
  const band = mapGpaToMonashBand(3.0, 4);
  const mid = Math.round((band.wamMin + band.wamMax) / 2);
  assert(mid === 75, 'GPA 3.0 midpoint 75%');
});

// --- CGPA / semester ---
test('GPA to CGPA formula', () => {
  assert(calculateCgpaFromSemesterGpa(2.8, 72, 3.5, 24) === 2.975, 'CGPA 2.975');
  assert(calculateCgpaFromSemesterGpa(3.5, 24, 3.5, 0) === null, 'rejects zero semester credits');
});

test('Monash official GPA example (fail = 0.3)', () => {
  const gpa = calculateMonashOfficialGpa([
    { grade: 'HD', credits: 6 },
    { grade: 'D', credits: 6 },
    { grade: 'N', credits: 6 },
  ]);
  assert(gpa === 2.433, `expected 2.433 got ${gpa}`);
});

// --- International / school ---
test('10-point GPA to WAM', () => {
  assert(convert10PointGpaToWamBand(8.5).grade === 'HD', '8.5 → HD');
  assert(convert10PointGpaToWamBand(6.4).grade === 'C', '6.4 → C (64%)');
  assert(convert10PointCgpaToGpa4(10) === 4.0, '10 → 4.0');
  assert(convert10PointCgpaToGpa4(11) === null, 'rejects >10');
});

test('High school GPA weighted', () => {
  const uw = calculateHighSchoolGpa([{ gradePoints: 4, credits: 1 }], false);
  const w = calculateHighSchoolGpa([{ gradePoints: 4, credits: 1 }], true);
  assert(uw === 4.0, 'unweighted A = 4.0');
  assert(w === 5.0, 'weighted A = 5.0');
});

test('ATAR converter bands', () => {
  const atar85 = convertAtarToPlanningBands(85);
  assert(atar85.wamMin === 75 && atar85.gpa4 === 3.0, 'ATAR 85 → WAM 75-79');
  const wam76 = convertWamToAtarRange(76);
  assert(wam76.atarMin === 85, 'WAM 76 → ATAR 85+');
  assert(convertAtarToPlanningBands(100) === null, 'rejects ATAR > 99.95');
});

test('Invalid inputs return null', () => {
  assert(getMonashGradeFromMark(-1) === null, 'negative WAM');
  assert(mapGpaToMonashBand(5, 4) === null, 'GPA > 4 on 4.0 scale');
  assert(convert10PointGpaToWamBand(-1) === null, 'negative 10pt GPA');
});

console.log(`\n---\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
