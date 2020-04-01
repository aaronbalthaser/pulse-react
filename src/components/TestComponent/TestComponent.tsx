import React from 'react';

import { Button } from 'src/components';

export const TestComponent = () => {
  const btnRef = React.useRef(null);

  const onClickHandler = () => {
    // code...
    btnRef.current.disabled = true;
  };

  return (
    <div>
      <Button ref={btnRef} onClick={onClickHandler}>
        Click me now!
      </Button>
    </div>
  );
};
