import * as React from 'react';

export interface HeadingProps extends React.HtmlHTMLAttributes<HTMLBaseElement> {

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
   * Element type.
   */
  el?: NodeType;
}

export enum NodeType {

  /**
   * Node types.
   */
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum HeadingClasses {

  /**
   * Shared
   */
  Shared = 'pulse-heading',

  /**
   * Headings default classes.
   */
  h1 = 'pulse-h1',
  h2 = 'pulse-h2',
  h3 = 'pulse-h3',
  h4 = 'pulse-h4',
  h5 = 'pulse-h5',
  h6 = 'pulse-h6',
}
