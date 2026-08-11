import { useState, useMemo } from 'react';
import { monashCourses, ATAR_COURSE_CATEGORIES } from '../data/monashAtarCourses';

export default function AtarCourseCheckerToolCore() {
  const [atarInput, setAtarInput] = useState('');
  const [isSeas, setIsSeas] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const atarScore = parseFloat(atarInput);
  const isValidAtar = !isNaN(atarScore) && atarScore >= 0 && atarScore <= 99.95;

  const filteredCourses = useMemo(() => {
    let courses = monashCourses;
    if (selectedCategory !== 'All') {
      courses = courses.filter(c => c.category === selectedCategory);
    }
    return courses;
  }, [selectedCategory]);

  return (
    <div data-article-tool-screenshot="atar-checker" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Your Expected ATAR
            </label>
            <input
              type="number"
              min="0"
              max="99.95"
              step="0.05"
              placeholder="e.g. 82.50"
              value={atarInput}
              onChange={e => setAtarInput(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-xl font-bold"
            />
          </div>
          <div className="flex items-center">
            <label className="flex items-start gap-3 cursor-pointer p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors w-full">
              <div className="flex-shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  checked={isSeas}
                  onChange={e => setIsSeas(e.target.checked)}
                  className="w-5 h-5 text-fuchsia-600 rounded border-gray-300 focus:ring-fuchsia-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div className="flex-col">
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  Monash Guarantee / SEAS Eligible?
                </span>
                <span className="block text-xs text-gray-500 mt-1">
                  Check this if you are eligible for educational disadvantage adjustments (lowers the required ATAR).
                </span>
              </div>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Filter by Study Area
          </label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          >
            <option value="All">All Categories</option>
            {ATAR_COURSE_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          Course Eligibility Results {isValidAtar && <span className="text-fuchsia-600 dark:text-fuchsia-400">— Your ATAR: {atarScore.toFixed(2)}</span>}
        </h2>
        
        {isValidAtar ? (
          <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
            {filteredCourses.map(course => {
              const reqAtar = isSeas ? course.seasAtar : course.guaranteedAtar;
              const isEligible = reqAtar !== null && atarScore >= reqAtar;
              
              return (
                <div key={course.name} className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${isEligible ? 'bg-green-50/30 dark:bg-green-900/10' : ''}`}>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{course.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-xs">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {course.campus}
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end min-w-[140px]">
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      Required ATAR: <span className="text-gray-900 dark:text-white">{reqAtar}</span>
                    </div>
                    {isEligible ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Likely Eligible
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        Need {((reqAtar ?? 0) - atarScore).toFixed(2)} More
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            Enter your expected ATAR above to see which Monash degrees you qualify for.
          </div>
        )}
      </div>
    </div>
  );
}
