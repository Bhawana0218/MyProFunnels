import { useState, useEffect, useCallback } from 'react';

/**
 * Returns a normalized scroll progress value (0–1) for the page,
 * and a boolean `pastThreshold` indicating if user scrolled past a given pixel amount.
 */
export function useScrollProgress(threshold = 80) {
  const [scrollY, setScrollY] = useState(0);
  const [pastThreshold, setPastThreshold] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrollY(y);
    setPastThreshold(y > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const progress = typeof document !== 'undefined'
    ? Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)
    : 0;

  return { scrollY, progress, pastThreshold };
}
