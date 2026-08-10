import { GraduationCap, ArrowRight, BookOpen, Star } from 'lucide-react';

export default function StudentOffersBanner() {
  return (
    <div className="mt-8 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recommended for Students</h3>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Grammarly Offer */}
        <a
          href="https://app.impact.com/campaign-promo-links/Grammarly.brand" // REPLACE THIS LINK WITH YOUR ACTUAL IMPACT GRAMMARLY LINK
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-green-300 dark:hover:border-green-700 transition-all overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-bl-lg">
            Free Tool
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Grammarly</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Boost your WAM with better essays</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Fix grammar mistakes instantly and write flawless assignments. Essential for HD grades.
          </p>
          <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Get it for Free</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </a>

        {/* Amazon Prime Student Offer */}
        <a
          href="https://www.amazon.com.au/prime/student" // REPLACE THIS LINK WITH YOUR AMAZON ASSOCIATES LINK
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-bl-lg">
            6 Months Free
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Amazon Prime Student</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Exclusive Australian Student Deal</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Free fast delivery on textbooks, plus Prime Video for study breaks. Claim your 6-month trial.
          </p>
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </a>
      </div>
    </div>
  );
}
