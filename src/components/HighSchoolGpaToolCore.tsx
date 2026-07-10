import { useState } from 'react';
import { calculateHighSchoolGpa } from '../utils/monashGrades';

interface CourseRow {
  id: string;
  gradePoints: string;
  credits: string;
}

const gradeOptions = [
  { label: 'A / 4.0', value: '4' },
  { label: 'A- / 3.7', value: '3.7' },
  { label: 'B+ / 3.3', value: '3.3' },
  { label: 'B / 3.0', value: '3' },
  { label: 'B- / 2.7', value: '2.7' },
  { label: 'C+ / 2.3', value: '2.3' },
  { label: 'C / 2.0', value: '2' },
  { label: 'C- / 1.7', value: '1.7' },
  { label: 'D / 1.0', value: '1' },
  { label: 'F / 0.0', value: '0' },
];

function createRow(): CourseRow {
  return { id: crypto.randomUUID(), gradePoints: '3', credits: '1' };
}

export default function HighSchoolGpaToolCore() {
  const [weighted, setWeighted] = useState(false);
  const [courses, setCourses] = useState<CourseRow[]>([createRow(), createRow(), createRow()]);

  const parsed = courses
    .map(course => ({
      gradePoints: parseFloat(course.gradePoints),
      credits: parseFloat(course.credits),
    }))
    .filter(course => !Number.isNaN(course.gradePoints) && !Number.isNaN(course.credits) && course.credits > 0);

  const result = parsed.length > 0 ? calculateHighSchoolGpa(parsed, weighted) : null;

  return (
    <div data-article-tool-screenshot="high-school-gpa" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => setWeighted(false)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              !weighted ? 'bg-slate-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Unweighted (4.0)
          </button>
          <button
            type="button"
            onClick={() => setWeighted(true)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              weighted ? 'bg-slate-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Weighted (5.0)
          </button>
        </div>

        <div className="space-y-3">
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-1 text-xs text-gray-500">{index + 1}</div>
              <div className="col-span-6">
                <select
                  value={course.gradePoints}
                  onChange={event =>
                    setCourses(prev =>
                      prev.map(row => (row.id === course.id ? { ...row, gradePoints: event.target.value } : row))
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm"
                >
                  {gradeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4">
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  placeholder="Credits"
                  value={course.credits}
                  onChange={event =>
                    setCourses(prev =>
                      prev.map(row => (row.id === course.id ? { ...row, credits: event.target.value } : row))
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm"
                />
              </div>
              <div className="col-span-1">
                <button
                  type="button"
                  onClick={() => setCourses(prev => prev.filter(row => row.id !== course.id))}
                  className="text-red-500 text-xs font-semibold"
                  disabled={courses.length <= 1}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setCourses(prev => [...prev, createRow()])}
          className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:underline"
        >
          + Add course
        </button>

        {result && (
          <div className="mt-8 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
            <div className="text-xs uppercase text-slate-600 dark:text-slate-400 mb-1">
              {weighted ? 'Weighted' : 'Unweighted'} High School GPA
            </div>
            <div className="text-5xl font-bold text-slate-800 dark:text-slate-200">{result.gpa.toFixed(3)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">out of {result.scaleMax}.0</div>
          </div>
        )}
      </div>
    </div>
  );
}
