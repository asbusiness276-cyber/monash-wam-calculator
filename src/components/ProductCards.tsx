import { ExternalLink, Clock } from 'lucide-react';
import { products } from '../data/products';

export default function ProductCards() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Recommended Books &amp; Study Resources</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto">
            Top-rated books and academic resources recommended for university students, medical students, and future professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="relative bg-gray-100 dark:bg-gray-700 h-52 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full w-full p-4"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  SALE
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through decoration-red-400">${product.mrp}</span>
                    <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                      Save ${product.mrp - product.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-medium mb-3">
                    <Clock size={12} />
                    Offer Ends in 7 Days
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    <ExternalLink size={14} />
                    View on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
