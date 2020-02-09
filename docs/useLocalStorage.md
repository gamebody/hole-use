使用

<xmp>
import { useLocalStorage } from 'react-use';

const Demo = () => {
  const [value, setValue] = useLocalStorage('hello', 'world！');

  return (
    <div>
      <div>storage value: {value}</div>
      <button onClick={() => setValue('react')}>react</button>
      <button onClick={() => setValue('vue')}>vue</button>
    </div>
  );
};
</xmp>


