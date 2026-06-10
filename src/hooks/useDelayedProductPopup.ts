import { useEffect, useRef, useState } from 'react';
import {
  type CalculatorSubjectInput,
  type Recommendation,
  evaluateRecommendationTrigger,
} from '../utils/recommendationEngine';

export const PRODUCT_POPUP_DELAY_MS = 5000;

interface UseDelayedProductPopupOptions {
  enabled?: boolean;
  hasResult: boolean;
  userReady: boolean;
  route: string;
  subjects: CalculatorSubjectInput[];
  delayMs?: number;
}

export function useDelayedProductPopup({
  enabled = true,
  hasResult,
  userReady,
  route,
  subjects,
  delayMs = PRODUCT_POPUP_DELAY_MS,
}: UseDelayedProductPopupOptions) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const timerRef = useRef<number | null>(null);
  const subjectsKey = JSON.stringify(subjects);

  useEffect(() => {
    if (!enabled || !hasResult || !userReady) {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      const rec = evaluateRecommendationTrigger({ route, subjects });
      if (rec) {
        setRecommendation(rec);
        setPopupOpen(true);
      }
      timerRef.current = null;
    }, delayMs);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [enabled, hasResult, userReady, route, delayMs, subjectsKey]);

  return { popupOpen, setPopupOpen, recommendation };
}

export function useUserInteractionFlag() {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const markUserInteracted = () => setHasUserInteracted(true);
  return { hasUserInteracted, markUserInteracted };
}
