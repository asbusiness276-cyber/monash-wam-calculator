import { useState, useEffect } from 'react';
import { AMAZON_STUDENT_PRODUCTS, type AmazonProduct } from '../data/amazonProducts';

export function useAutoRotatingProducts(intervalMs = 10000, initialProductId?: string): AmazonProduct {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialProductId) {
      const idx = AMAZON_STUDENT_PRODUCTS.findIndex(p => p.id === initialProductId);
      return idx >= 0 ? idx : 0;
    }
    // Random start
    return Math.floor(Math.random() * AMAZON_STUDENT_PRODUCTS.length);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % AMAZON_STUDENT_PRODUCTS.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return AMAZON_STUDENT_PRODUCTS[currentIndex];
}

