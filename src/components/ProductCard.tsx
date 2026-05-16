import { ExternalLink } from 'lucide-react';
import { ProductInfo } from '../utils/recommendationEngine';

interface ProductCardProps {
  product: ProductInfo;
  compact?: boolean;
  /** Narrow card for article FAQ side rails and mobile columns */
  rail?: boolean;
}

export default function ProductCard({ product, compact = false, rail = false }: ProductCardProps) {
  const hashSeed = product.name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const offerDays = 3 + (hashSeed % 5);
  const parsedPrice = Number.parseFloat(product.price);
  const isNumericPrice = Number.isFinite(parsedPrice);
  const salePrice = isNumericPrice ? parsedPrice : 0;
  const originalPrice = isNumericPrice
    ? Math.ceil(salePrice * (1.15 + (hashSeed % 7) / 100))
    : 19 + (hashSeed % 25);
  const savingAmount = Math.max(1, Math.round(originalPrice - salePrice));

  const imageHeight = rail ? 'h-28 sm:h-32' : compact ? 'h-40' : 'h-52';
  const padding = rail ? 'p-2.5 sm:p-3' : 'p-4';
  const titleClass = rail
    ? 'font-semibold text-[11px] sm:text-xs text-gray-900 dark:text-white line-clamp-3 leading-snug'
    : 'font-semibold text-sm text-gray-900 dark:text-white line-clamp-2';

  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full min-w-0">
      <div className={`bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0 ${imageHeight}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-contain ${rail ? 'p-2' : 'p-4'}`}
        />
      </div>

      <div className={`${padding} flex flex-col gap-2 sm:gap-3 flex-1 min-w-0`}>
        <h3 className={titleClass}>{product.name}</h3>
        {product.description && !rail && (
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
        )}
        <div className="space-y-1">
          <div className={`flex flex-wrap items-center ${rail ? 'gap-x-1.5 gap-y-0.5' : 'gap-2'}`}>
            <p className={`font-bold text-gray-900 dark:text-white ${rail ? 'text-sm' : 'text-lg'}`}>
              {isNumericPrice ? `$${salePrice}` : product.price}
            </p>
            <p className={`text-gray-400 line-through ${rail ? 'text-[10px]' : 'text-xs'}`}>${originalPrice}</p>
            {!rail && (
              <span className="text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
                Save ${savingAmount}
              </span>
            )}
          </div>
          {rail ? (
            <p className="text-[10px] font-medium text-amber-600 dark:text-amber-400">Save ${savingAmount}</p>
          ) : (
            <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
              Offer valid for {offerDays} days
            </p>
          )}
        </div>
        <a
          href={product.url || '#'}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={`group mt-auto inline-flex items-center justify-center gap-1.5 w-full rounded-lg sm:rounded-xl bg-amber-500 hover:bg-emerald-600 text-white font-semibold transition-colors ${
            rail ? 'py-2 text-[11px] sm:text-xs' : 'py-2.5 text-sm'
          }`}
        >
          <ExternalLink size={rail ? 12 : 14} className="shrink-0" />
          <span className="group-hover:hidden truncate">View on Amazon</span>
          <span className="hidden group-hover:inline truncate">Buy Now</span>
        </a>
      </div>
    </article>
  );
}
