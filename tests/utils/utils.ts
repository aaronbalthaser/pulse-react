import React from 'react';
import checkPropTypes from 'check-prop-types';

/**
 * Returns shallow wrapper with the targeted node by data-test attribute.
 * @param {html} wrapper - Enzyme shallow wrapper to search within
 * @param {string} value - Attr identifying data-test attribute
 */
export const findByAttribute = (wrapper: any, value: string) => {
  return wrapper.find(`[data-test-id='${value}']`);
};

export const checkProp = (component: any, conformingProps: any) => {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
};
