
/**Generic/reusable local storrage */
import { useState, useEffect } from 'react';

export const MyLocalStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    const initial = stored ? JSON.parse(stored) : defaultValue;
    const [value, setValue] = useState(initial);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }
  