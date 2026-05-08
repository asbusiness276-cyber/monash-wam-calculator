import { useState } from 'react';

interface ConversionRow {
  wamMin: number;
  wamMax: number;
  grade: string;
  gpa4: number;
  gpa7: number;
  label: string;
}

const conversionTable: ConversionRow[] = [
  {
    wamMin: 80,
    wamMax: 100,
    grade: 'HD',
    gpa4: 4.0,
    gpa7: 7.0,
    label: 'High Distinction',
  },
  {
    wamMin: 70,
    wamMax: 79,
    grade: 'D',
    gpa4: 3.0,
    gpa7: 6.0,
    label: 'Distinction',
  },
  {
    wamMin: 60,
    wamMax: 69,
    grade: 'C',
    gpa4: 2.0,
    gpa7: 5.0,
    label: 'Credit',
  },
  {
    wamMin: 50,
    wamMax: 59,
    grade: 'P',
    gpa4: 1.0,
    gpa7: 4.0,
    label: 'Pass',
  },
  {
    wamMin: 0,
    wamMax: 49,
    grade: 'N',
    gpa4: 0.0,
    gpa7: 0.0,
    label: 'Fail',
  },
];

function convertWAMtoGPA(wam: number) {
  return conversionTable.find(
    (r) => wam >= r.wamMin && wam <= r.wamMax
  );
}

}
