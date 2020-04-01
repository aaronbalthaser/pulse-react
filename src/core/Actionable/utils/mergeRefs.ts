import * as React from 'react';

/**
 * mergeRefs is a helper for using refs while preserving existing refs if
 * they exist.
 *
 * @param refs
 */
export const mergeRefs = <T>(...refs: React.Ref<T>[]) => {
  return React.useMemo(() => {
    const filteredRefs = refs.filter(Boolean);

    if (filteredRefs.length === 0) {
      return null;
    }

    if (filteredRefs.length === 1) {
      return filteredRefs[0];
    }

    return (value: T) =>
      filteredRefs.forEach(ref => {
        setRefs(ref, value);
      });
  }, [refs]);
};


/**
 * setRefs
 * @param ref React ref
 * @param value Default value passed into useRef
 */
const setRefs = <T>(ref: React.Ref<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);

    return;
  }

  (ref as React.MutableRefObject<any>).current = value;
};
