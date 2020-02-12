import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue?: T): [T, React.Dispatch<T>] => {
  const [state, setState] = useState<T>(() => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
