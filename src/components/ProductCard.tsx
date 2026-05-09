import { ExternalLink } from 'lucide-react';
import { ProductInfo } from '../utils/recommendationEngine';

interface ProductCardProps {
  product: ProductInfo;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const hashSeed = product.name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const offerDays = 3 + (hashSeed % 5); // 3-7 days
  const parsedPrice = Number.parseFloat(product.price);
  const isNumericPrice = Number.isFinite(parsedPrice);
  const salePrice = isNumericPrice ? parsedPrice : 0;
  const originalPrice = isNumericPrice
    ? Math.ceil(salePrice * (1.15 + (hashSeed % 7) / 100))
    : 19 + (hashSeed % 25);
  const savingAmount = Math.max(1, Math.round(originalPrice - salePrice));

  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className={`bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${compact ? 'h-40' : 'h-52'}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4"
        />
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
        {product.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{product.description}</p>
        )}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {isNumericPrice ? `$${salePrice}` : product.price}
            </p>
            <p className="text-xs text-gray-400 line-through">${originalPrice}</p>
            <span className="text-[11px] font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
              Save ${savingAmount}
            </span>
          </div>
          <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
            Offer valid for {offerDays} days
          </p>
        </div>
        <a
          href={product.url || '#'}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="group mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
        >
          <ExternalLink size={14} />
          <span className="group-hover:hidden">View on Amazon</span>
          <span className="hidden group-hover:inline">Buy Now on Amazon</span>
        </a>
      </div>
    </article>
  );
}
