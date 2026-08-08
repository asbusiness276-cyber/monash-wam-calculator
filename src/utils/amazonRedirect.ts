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

  // Safely open in a new browser tab while maintaining focus on our site
  if (typeof window !== 'undefined') {
    // Open as a popup window rather than a new tab, which makes it easier to push to background
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth = Math.min(1200, screenWidth * 0.8);
    const popupHeight = Math.min(800, screenHeight * 0.8);
    
    // We intentionally open the window behind the current window (pop-under)
    const amazonWindow = window.open(
      targetUrl, 
      'AmazonDeals', 
      `width=${popupWidth},height=${popupHeight},left=${(screenWidth - popupWidth)/2},top=${(screenHeight - popupHeight)/2},noopener,noreferrer`
    );
    
    // Ensure browser focus stays on our website tab
    if (amazonWindow) {
      amazonWindow.blur();
      window.focus();
    }
  }
}
