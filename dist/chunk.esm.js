import { createElement, Fragment } from 'react';
import { useConfig } from 'docz';
import getter from 'lodash/get';
import { ThemeProvider as ThemeProvider$1 } from 'styled-components';

const get = (val, defaultValue) => p => getter(p, `theme.docz.${val}`, defaultValue);
const ThemeProvider = ({
  children
}) => {
  const config = useConfig();

  const next = prev => Object.assign({}, prev, {
    docz: config.themeConfig
  });

  return createElement(ThemeProvider$1, {
    theme: next
  }, createElement(Fragment, null, children));
};

export { get as a, ThemeProvider as b };
