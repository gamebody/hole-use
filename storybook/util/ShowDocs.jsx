import * as React from 'react';

const h = React.createElement;

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

export default ShowDocs;
