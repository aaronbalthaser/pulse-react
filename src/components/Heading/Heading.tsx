import * as React from 'react';

import classNames from 'classnames';

import { ElementType } from 'src/core';

import { NodeType, HeadingProps, HeadingClasses } from 'src/components';

/**
 * Pulse Heading Component.
 * Renders h1 thru h6 heading element.
 *
 * @pulse-component Heading
 */
const _Heading = ({
  children,
  classes,
  el,
  forwardedRef,
  ...rest
}: HeadingProps & { forwardedRef: React.Ref<HTMLHeadingElement> }) => {

  const htmlElement = el ? el : NodeType.H1;

  const props = {
    ...rest,
    from: htmlElement,
    className: classNames(
      HeadingClasses.Shared,
      HeadingClasses[htmlElement],
      classes && classes.length && classes.join(' ')
    )
  };

  return (
    <ElementType { ...props } ref={forwardedRef}>
      {children}
    </ElementType>
  );
};

const ForwardedHeading = (props: HeadingProps, ref: React.Ref<HTMLHeadingElement>) => {
  return <_Heading { ...props } forwardedRef={ref} />
};

ForwardedHeading.displayName = 'forwarded(Heading)';

export const Heading = React.forwardRef(ForwardedHeading);
export * from './_interfaces';
