import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue?: T): [T, React.Dispatch<T>] => {
  const [state, setState] = useState<T>(() => {
    const localStorageValue = localStorage.getItem(key);
    try {
      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue);
      } else {
        return initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
