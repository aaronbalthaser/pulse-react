import * as React from 'react';

import { mergeRefs } from './utils';

import { Props, defaultProps, DefaultProps } from './_interfaces';

/**
 * Pulse Actionable Component
 * Returns a button element by default with encapsulated functionality.
 *
 * @pulse-component Actionable
 */
const _Actionable = ({
  disabled,
  from: Component,
  focusable,
  forwardedRef,
  onClick,
  ...rest
}: Props & { forwardedRef: React.Ref<HTMLElement> }) => {

  const localRef = React.useRef<HTMLElement>();
  const ref = mergeRefs(localRef, forwardedRef);

  // Handlers
  const handleClick = React.useCallback<React.MouseEventHandler>(
    (event) => {
      if (disabled) {
        event.stopPropagation();
        event.preventDefault();

        return;
      }

      onClick(event);
    }, [disabled, onClick]
  );

  const props = {
    ref,
    disabled,
    onClick: handleClick,
    ...rest
  };

  return <Component {...props} />
};

_Actionable.defaultProps = defaultProps;

const ForwardedActionable = (
  props: Omit<Props, keyof DefaultProps> & Partial<DefaultProps>,
  ref: React.Ref<HTMLElement>
) => {
  return <_Actionable { ...props } forwardedRef={ref} />;
};

ForwardedActionable.displayName ='forwarded(Actionable)';

export const Actionable = React.forwardRef(ForwardedActionable);
