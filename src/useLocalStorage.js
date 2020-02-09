import { useRef, useEffect, useState } from 'react';


const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key)

    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    } else {
      return initialValue;
    }
  })


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state])


  return [state, setState]
}

export default useLocalStorage;
