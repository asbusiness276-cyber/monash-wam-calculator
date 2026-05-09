import { X } from 'lucide-react';
import ProductCard from './ProductCard';
import { Recommendation } from '../utils/recommendationEngine';

interface ProductPopupProps {
  recommendation: Recommendation | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductPopup({ recommendation, isOpen, onClose }: ProductPopupProps) {
  if (!isOpen || !recommendation) return null;
  const isWeak = recommendation.strength === 'weak';

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-3 md:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] animate-fadeIn" onClick={onClose} />

      <div className="relative w-full max-w-[96vw] md:max-w-5xl max-h-[92vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-4 md:p-6 animate-[slideUp_220ms_ease-out]">
        <button
          onClick={onClose}
          aria-label="Close recommendation popup"
          className="absolute top-3 right-3 z-10 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm"
        >
          <X size={18} />
        </button>

        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            {recommendation.subjectType}
          </p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{recommendation.title}</h3>
          <p className={`text-xs font-semibold mt-2 ${isWeak ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
            {isWeak ? 'Weak performance detected (below 59)' : 'Good performance detected (59 and above)'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{recommendation.message}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Recommended for current result</p>
            <ProductCard product={isWeak ? recommendation.products.weak : recommendation.products.strong} compact />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Alternative recommendation</p>
            <ProductCard product={isWeak ? recommendation.products.strong : recommendation.products.weak} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
