import * as React from 'react';

import { mergeRefs } from './utils';

type DefaultProps = typeof defaultProps;
type BaseProps = Pick<React.HTMLAttributes<any>, 'children'> & React.RefAttributes<any>
type Props = Readonly<BaseProps & {

  /**
   * Click event handler.
   */
  onClick?: React.MouseEventHandler
} & DefaultProps>

const defaultProps = {

  /**
   * Sets the element's `aria-disabled` attribute.
   * @default false
   */
  disabled: false,

  /**
   * Sets the underlying DOM element tag.
   * @default "button"
   */
  from: 'button' as keyof JSX.IntrinsicElements | React.ComponentType<any>
};

const _Actionable = ({
  disabled,
  forwardedRef,
  from: Component,
  // handlers
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
    ...rest,
    ref,
    onClick: handleClick,
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
