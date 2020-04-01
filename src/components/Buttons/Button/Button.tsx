import * as React from 'react';

import { Actionable } from 'src/core';

export enum ButtonStyle {

  /**
   * Default button style.
   */
  Default = 'pulse-button-default'
}

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * React node
   */
  children?: React.ReactNode;

  /**
   * Specifies whether the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Pulse button component.
 * Communicates what action will occur on user click.
 *
 * @pulse-component Button
 */
const _Button = ({
  forwardedRef,
  ...rest
}: Props & { forwardedRef: React.Ref<HTMLButtonElement> }) => {

  const props = {
    ...rest
  };

  return (
    <Actionable { ...props } ref={forwardedRef} >
      {props.children}
    </Actionable>
  );
};

const ForwardedButton = (props: Props, ref: React.Ref<HTMLButtonElement>) => {
  return <_Button {...props} forwardedRef={ref} />;
};

ForwardedButton.displayName = 'forwarded(Button)';

export const Button = React.forwardRef(ForwardedButton);
