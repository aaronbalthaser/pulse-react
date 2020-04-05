import * as React from 'react';

import { ElementTypeProps } from './_interfaces';

/**
 * Pulse ElementType Component
 * Returns an HTML element based on prop argument.
 *
 * @pulse-component ElementType
 *
 * TODO: add support for html element attributes
 */
const _ElementType = ({
  from: Component,
  forwardedRef,
  ...rest
}: ElementTypeProps & { forwardedRef: React.Ref<HTMLElement> }) => {

  const props = {
    ...rest
  };

  return <Component {...props} />
};

const ForwardedElementType = (props: any, ref: React.Ref<HTMLElement>) => {
  return <_ElementType { ...props } forwardedRef={ref} />
};

export const ElementType = React.forwardRef(ForwardedElementType);
