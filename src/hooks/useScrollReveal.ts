import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Detects when an element enters the viewport and returns `isRevealed`.
 * Used to trigger text weight-shift animations on scroll-into-view.
 */
export function useScrollReveal(threshold = 0.3) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, isRevealed]);

  const reset = useCallback(() => setIsRevealed(false), []);

  return { ref, isRevealed, reset };
}
