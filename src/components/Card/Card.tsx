import React from 'react';

import classNames from 'classnames';

import { Actionable } from 'src/core';

import { CardProps, CardNodeType, CardClasses } from './_interfaces';

import './Card.scss';

const _Card = ({
  children,
  classes,
  classHooks,
  el,
  ...rest
}: CardProps) => {

  const htmlElement = el ? el : CardNodeType.DIV;

  const props = {
    ...rest,
    from: htmlElement,
    className: classNames(
      classHooks && CardClasses.Shared,
      rest.onClick && CardClasses.Clickable,
      classes && classes.length && classes.join(' ')
    )
  };

  return (
    <Actionable { ...props }>
      {children}
    </Actionable>
  );
};

export * from './_interfaces';

export const Card = _Card;
