import { useEffect, useRef } from 'react';

export function useDebounce(func, delay, cleanUp = false) {
  const timeoutRef = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  useEffect(() => {
    return cleanUp ? clearTimer : null;
  }, [cleanUp]);

  return (...args) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      return func(...args);
    }, delay);
  };
}
