import * as React from 'react';

import classNames from 'classnames';

import { Actionable } from 'src/core';

import { Props } from './_interfaces';

import './Button.scss';

/**
 * Pulse button component.
 * Communicates what action will occur on user click.
 *
 * @pulse-component Button
 */
const _Button = ({
  buttonStyle,
  children,
  classes,
  forwardedRef,
  ...rest
}: Props & { forwardedRef: React.Ref<HTMLButtonElement> }) => {

  const props = {
    ...rest,
    className: classNames(
      'pulse-button',
      buttonStyle,
      classes && classes.length && classes.join(' ')
    )
  };

  return (
    <Actionable { ...props } ref={forwardedRef} >
      {children}
    </Actionable>
  );
};

const ForwardedButton = (props: Props, ref: React.Ref<HTMLButtonElement>) => {
  return <_Button {...props} forwardedRef={ref} />;
};

ForwardedButton.displayName = 'forwarded(Button)';

export const Button = React.forwardRef(ForwardedButton);
export * from './_interfaces';
