const unitSubjectCatalog = [
  { unitCode: "FIT1045", specificSubject: "Intro" },
  { unitCode: "MAT1830", specificSubject: "Math" },
  { unitCode: "ENG1005", specificSubject: "Eng" }
];

function inferUniYearLevelFromUnitCode(unitCode) {
  const match = unitCode.trim().match(/\d+/);
  if (!match) return null;
  const firstDigit = Number.parseInt(match[0][0] ?? '', 10);
  if (Number.isNaN(firstDigit) || firstDigit < 1) return null;
  return firstDigit;
}

function getUniYearLevelWeight(yearLevel) {
  return yearLevel === 1 ? 0.5 : 1.0;
}

function calculateUniOfficialWam(units) {
  let weightedMarks = 0;
  let weightedCredits = 0;

  for (const unit of units) {
    if (Number.isNaN(unit.mark) || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    const levelWeight = getUniYearLevelWeight(unit.yearLevel);
    weightedMarks += unit.mark * unit.credits * levelWeight;
    weightedCredits += unit.credits * levelWeight;
  }

  if (weightedCredits === 0) return null;
  return Math.round((weightedMarks / weightedCredits) * 100) / 100;
}

function calculateCreditWeightedWam(units) {
  let weighted = 0;
  let credits = 0;
  for (const unit of units) {
    if (Number.isNaN(unit.mark) || Number.isNaN(unit.credits) || unit.credits <= 0) continue;
    weighted += unit.mark * unit.credits;
    credits += unit.credits;
  }
  if (credits === 0) return null;
  return Math.round((weighted / credits) * 100) / 100;
}

const subjects = [
  {
    id: 1,
    unit: 'FIT1045',
    mark: '80',
    credits: '6',
    yearLevel: String(inferUniYearLevelFromUnitCode('FIT1045') ?? 1),
  },
  {
    id: 2,
    unit: 'MAT1830',
    mark: '75',
    credits: '6',
    yearLevel: String(inferUniYearLevelFromUnitCode('MAT1830') ?? 1),
  },
  {
    id: 3,
    unit: 'ENG1005',
    mark: '70',
    credits: '6',
    yearLevel: String(inferUniYearLevelFromUnitCode('ENG1005') ?? 1),
  },
];

const valid = subjects.filter(s => s.mark !== '' && s.credits !== '');
console.log("valid length:", valid.length);

const parsedUnits = valid
  .map(s => ({
    mark: parseFloat(s.mark),
    credits: parseFloat(s.credits),
    yearLevel: parseInt(s.yearLevel, 10) || 1,
  }))
  .filter(unit => !Number.isNaN(unit.mark) && !Number.isNaN(unit.credits) && unit.credits > 0);

console.log("parsedUnits length:", parsedUnits.length);
console.log("parsedUnits:", parsedUnits);

const planningWam = calculateCreditWeightedWam(parsedUnits);
const officialWam = calculateUniOfficialWam(parsedUnits);
console.log("planningWam:", planningWam);
console.log("officialWam:", officialWam);
