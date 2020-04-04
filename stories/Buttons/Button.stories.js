import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button, ButtonType, ButtonStyle } from 'src/components/Buttons';

export default {
  title: 'Button',
  component: Button,
};

export const _Button = () => (
  <Button
    onClick={action('clicked')}
    type={ButtonType.Button}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

_Button.story = {
  name: 'Button',
};
