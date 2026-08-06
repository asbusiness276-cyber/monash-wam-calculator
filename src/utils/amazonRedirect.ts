import { AMAZON_STORE_ID } from '../data/amazonProducts';

/**
 * Smart Amazon Affiliate new-tab opening based on student score.
 * Keeps our site open in the primary tab, while opening targeted Amazon AU deals in a new tab.
 */
export function triggerSmartAmazonRedirect(averageMark?: number) {
  let amazonSearchQuery = 'Casio+FX-82AU+PLUS+II+Scientific+Calculator';

  if (typeof averageMark === 'number' && !isNaN(averageMark)) {
    if (averageMark < 60) {
      // Low marks: Recommend Exam Calculators & Study Preparation Guides
      amazonSearchQuery = 'Casio+FX-82AU+PLUS+II+Scientific+Calculator+university+study+guides';
    } else if (averageMark >= 80) {
      // High marks: Recommend Premium Laptops & Digital Note-Taking Tablets
      amazonSearchQuery = 'Apple+MacBook+Air+M2+iPad+Air+student+deals';
    } else {
      // Mid marks: Recommend Focus Headphones & Power Banks
      amazonSearchQuery = 'Sony+WH-1000XM5+Anker+Power+Bank+student';
    }
  }

  const targetUrl = `https://www.amazon.com.au/s?k=${amazonSearchQuery}&tag=${AMAZON_STORE_ID}`;

  // Safely open in a new browser tab
  if (typeof window !== 'undefined') {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}
