import * as React from 'react';

export interface CardProps extends React.HtmlHTMLAttributes<HTMLBaseElement> {

  /**
   * Custom class names.
   * @default false
   */
  classes?: string[];

  /**
   * Default class hooks
   * @default none
   */
  classHooks?: boolean;

  /**
   * Specifies if the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Enables tab focus.
   * @default true
   */
  focusable?: boolean;

  /**
   * Element type.
   */
  el?: CardNodeType;

  /**
   * A callback for card onClick.
   */
  onClick?: () => void;
}

export enum CardNodeType {

  /**
   * Node types.
   */
  DIV = 'div',
  ARTICLE = 'article'
}

export enum CardClasses {

  /**
   * Shared
   */
  Shared = 'pulse-card',

  /**
   * Clickable
   */
  Clickable = 'pulse-card--clickable'
}
