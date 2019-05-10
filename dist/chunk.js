'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var docz = require('docz');
var getter = _interopDefault(require('lodash/get'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

const get = (val, defaultValue) => p => getter(p, `theme.docz.${val}`, defaultValue);
const ThemeProvider = ({
  children
}) => {
  const config = docz.useConfig();

  const next = prev => Object.assign({}, prev, {
    docz: config.themeConfig
  });

  return React.createElement(styled.ThemeProvider, {
    theme: next
  }, React.createElement(React.Fragment, null, children));
};

exports.ThemeProvider = ThemeProvider;
exports.get = get;
