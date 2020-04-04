import * as React from 'react';

type BaseProps = Pick<React.HTMLAttributes<any>, 'children'> & React.RefAttributes<any>
export type Props = Readonly<BaseProps & {

  /**
   * Click event handler.
   */
  onClick?: React.MouseEventHandler
} & DefaultProps>

export type DefaultProps = typeof defaultProps;
export const defaultProps = {

  /**
   * Sets the element's `aria-disabled` attribute.
   * @default false
   */
  disabled: false,

  /**
   * Sets whether the element can receive tab focus.
   */
  focusable: true,

  /**
   * Sets the underlying DOM element tag.
   * @default "button"
   */
  from: 'button' as keyof JSX.IntrinsicElements | React.ComponentType<any>
};
