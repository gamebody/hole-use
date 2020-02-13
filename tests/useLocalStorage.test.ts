import { renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from '../src';

afterEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

it('没有提供初始值将返回undefined', () => {
  const { result } = renderHook(() => useLocalStorage('key'));

  expect(result.current[0]).toBeUndefined();
});

it('提供初始值，将返回储存在ocalstorage中的值', () => {
  const key = 'some_key';
  const value = 'some_value';

  const { result } = renderHook(() => useLocalStorage(key, value));

  expect(result.current[0]).toBe(value);
  expect(localStorage.__STORE__[key]).toBe(`"${value}"`);
});
