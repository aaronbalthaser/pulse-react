import React from 'react';

import { Button, ButtonStyle, ButtonType } from 'src/components';

export const TestComponent = () => {
  const btnRef = React.useRef(null);

  const onClickHandler = () => {
    // code...
    // btnRef.current.disabled = true;
  };

  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onClickHandler}
        type={ButtonType.Button}
        buttonStyle={ButtonStyle.Default}
        classes={['special-class']}
      >
        <p>😀 😎 👍 💯</p>
      </Button>
    </div>
  );
};
