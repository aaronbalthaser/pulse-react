import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '../../src/components/Buttons';

export default {
  title: 'Button',
  component: Button,
};

export const _Button = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

_Button.story = {
  name: 'Button',
};
