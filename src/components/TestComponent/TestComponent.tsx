import React from 'react';

import { Heading, NodeType } from 'src/components';

export const TestComponent = () => {
  const btnRef = React.useRef(null);

  const onClickHandler = () => {
    // code...
    // btnRef.current.disabled = true;
  };

  return (
    <div>
      <Heading el={NodeType.H2}>
        Some title text
      </Heading>
    </div>
  );
};
