import { useEffect } from 'react';

export const useTimeout = (callback, delay) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
};
