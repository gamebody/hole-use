import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useLocalStorage } from '../src';

const ShowDocs = props => {
  return React.createElement(
    'div',
    {
      style: {
        padding: '0 20px',
      },
      dangerouslySetInnerHTML: {
        __html: props.md.default,
      },
    },
  );
};

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

storiesOf('副作用|useLocalStorage', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useLocalStorage.md')} />)
  .add('Demo', () => <Demo />);
