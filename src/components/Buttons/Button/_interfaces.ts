import * as React from 'react';

/**
 * Interfaces
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Custom class names.
   * @default false
   */
  classes?: string[];

  /**
   * Specifies whether the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Button style adds the corresponding target class name.
   * @default Default
   *
   * <
   *  Default | Secondary | Success |
   *  Danger | Warning | Info | Light | Dark
   * >
   */
  buttonStyle?: ButtonStyle;

  /**
   * Type of button <Button | Reset | Submit>
   * @default Button
   */
  type?: ButtonType;
}

/**
 * Enums
 */
export enum ButtonType {

  /**
   * Regular HTML button with no default behavior.
   */
  Button = 'button',

  /**
   * Reset button resets the form-data to its initial values.
   */
  Reset = 'reset',

  /**
   * Submit button submits form-data.
   */
  Submit = 'submit',
}

export enum ButtonStyle {

  /**
   * Shared
   */
  Shared = 'pulse-button',

  /**
   * Primary button style.
   */
  Default = 'pulse-button-primary',

  /**
   * Secondary button style.
   */
  Secondary = 'pulse-button-secondary',

  /**
   * Secondary button style.
   */
  Success = 'pulse-button-success',

  /**
   * Secondary button style.
   */
  Danger = 'pulse-button-danger',

  /**
   * Secondary button style.
   */
  Warning = 'pulse-button-warning',

  /**
   * Secondary button style.
   */
  Info = 'pulse-button-info',

  /**
   * Secondary button style.
   */
  Light = 'pulse-button-light',

  /**
   * Secondary button style.
   */
  Dark = 'pulse-button-dark',

  /**
   * Secondary button style.
   */
  Link = 'pulse-button-link'
}
