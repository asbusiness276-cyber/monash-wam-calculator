import {
  getMonashGradeFromMark,
  calculateRequiredRemainingAverage,
} from '../src/utils/monashGrades.ts';

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(getMonashGradeFromMark(76)?.grade === 'D', '76 should be D');
assert(getMonashGradeFromMark(80)?.grade === 'HD', '80 should be HD');
assert(getMonashGradeFromMark(79)?.grade === 'D', '79 should be D');
assert(getMonashGradeFromMark(49)?.grade === 'N', '49 should be N');

const required = calculateRequiredRemainingAverage(72, 96, 24, 75);
assert(required === 87, `expected 87, got ${required}`);

const tooHigh = calculateRequiredRemainingAverage(60, 96, 12, 80);
assert(tooHigh > 100, 'unreachable target should exceed 100');

const secured = calculateRequiredRemainingAverage(78, 96, 24, 75);
assert(secured < 0, 'already above target should be negative');

console.log('All calculator math checks passed.');
