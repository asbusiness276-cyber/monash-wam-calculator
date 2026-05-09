import ProductCard from './ProductCard';
import { getShowcaseProducts } from '../utils/recommendationEngine';

interface ProductShowcaseProps {
  title?: string;
  startIndex: number;
  endIndex: number;
}

export default function ProductShowcase({
  title = 'Recommended Books & Study Resources',
  startIndex,
  endIndex,
}: ProductShowcaseProps) {
  const products = getShowcaseProducts(startIndex, endIndex);

  if (products.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1.5">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Personalized academic books based on uploaded product data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map(product => (
          <ProductCard key={`${product.name}-${product.url}`} product={product} />
        ))}
      </div>
    </section>
  );
}
