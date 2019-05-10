'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var docz = require('docz');
require('lodash/get');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var __chunk_1 = require('./chunk.js');
var reactCodemirror2 = require('react-codemirror2');
var PerfectScrollbar = _interopDefault(require('react-perfect-scrollbar'));
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closetag');
require('codemirror/addon/fold/xml-fold');

const ScrollbarStyles = styled.createGlobalStyle`
  /*
  * Container style
  */
  .ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  /*
  * Scrollbar rail styles
  */
  .ps__rail-x {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    height: 15px;
    /* there must be 'bottom' or 'top' for ps__rail-x */
    bottom: 0px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    width: 15px;
    /* there must be 'right' or 'left' for ps__rail-y */
    right: 0;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y {
    display: block;
    background-color: transparent;
  }
  /*
  * Scrollbar thumb styles
  */
  .ps__thumb-x {
    background-color: #aaa;
    border-radius: 4px;
    transition: background-color 0.2s linear, height 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear,
      height 0.2s ease-in-out;
    height: 6px;
    /* there must be 'bottom' for ps__thumb-x */
    bottom: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__thumb-y {
    background-color: #aaa;
    border-radius: 4px;
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    width: 6px;
    /* there must be 'right' for ps__thumb-y */
    right: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x,
  .ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: #999;
    height: 11px;
  }
  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y,
  .ps__rail-y.ps--clicking .ps__thumb-y {
    background-color: #999;
    width: 11px;
  }
  /* MS supports */
  @supports (-ms-overflow-style: none) {
    .ps {
      overflow: auto !important;
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ps {
      overflow: auto !important;
    }
  }
  .scrollbar-container {
    position: relative;
    height: 100%;
  }
`;

const theme = styled.css`
  .cm-s-docz-light.CodeMirror {
    border-radius: 0;
    background: #fbfcfd;
    color: #24292e;
  }

  .cm-s-docz-light .CodeMirror-gutters {
    background: #fbfcfd;
    border-right-width: 0;
    border-radius: 0;
  }

  .cm-s-docz-light .CodeMirror-guttermarker {
    color: white;
  }

  .cm-s-docz-light .CodeMirror-guttermarker-subtle {
    color: #d0d0d0;
  }

  .cm-s-docz-light .CodeMirror-linenumber {
    color: #959da5;
    background: #fbfcfd;
  }

  .cm-s-docz-light .CodeMirror-cursor {
    border-left: 1px solid #24292e;
  }

  .cm-s-docz-light div.CodeMirror-selected,
  .cm-s-docz-light .CodeMirror-line::selection,
  .cm-s-docz-light .CodeMirror-line > span::selection,
  .cm-s-docz-light .CodeMirror-line > span > span::selection,
  .cm-s-docz-light .CodeMirror-line::-moz-selection,
  .cm-s-docz-light .CodeMirror-line > span::-moz-selection,
  .cm-s-docz-light .CodeMirror-line > span > span::-moz-selection {
    background: #c8c8fa;
  }

  .cm-s-docz-light .CodeMirror-activeline-background {
    background: #fafbfc;
  }

  .cm-s-docz-light .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: #949495 !important;
  }

  .cm-s-docz-light .CodeMirror-lines {
    background: #fbfcfd;
  }

  .cm-s-docz-light .cm-comment {
    color: #6a737d;
  }

  .cm-s-docz-light .cm-tag,
  .cm-s-docz-light .cm-bracket {
    color: #d73a49;
  }

  .cm-s-docz-light .cm-constant {
    color: #005cc5;
  }

  .cm-s-docz-light .cm-entity {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #6f42c1;
  }

  .cm-s-docz-light .cm-keyword {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #d73a49;
  }

  .cm-s-docz-light .cm-storage {
    color: #d73a49;
  }

  .cm-s-docz-light .cm-string {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #005cc5;
  }

  .cm-s-docz-light .cm-support {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #005cc5;
  }

  .cm-s-docz-light .cm-variable {
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #e36209;
  }
`;

const theme$1 = styled.css`
  .CodeMirror.cm-s-docz-dark {
    color: #d8dee9;
    background-color: #2e3440;
    border-radius: 0;
  }
  .cm-s-docz-dark .CodeMirror-selected {
    background-color: rgba(67, 76, 94, 0.8);
  }
  .cm-s-docz-dark .CodeMirror-gutter,
  .cm-s-docz-dark .CodeMirror-gutters {
    border: none;
    background-color: #2e3440;
    border-radius: 0;
  }
  .cm-s-docz-dark .CodeMirror-linenumber,
  .cm-s-docz-dark .CodeMirror-linenumbers {
    color: rgba(216, 222, 233, 0.4) !important;
    background-color: #2e3440;
  }
  .cm-s-docz-dark .CodeMirror-lines {
    color: #d8dee9 !important;
    background-color: transparent;
  }
  .cm-s-docz-dark .CodeMirror-cursor {
    border-left: 2px solid #d8dee9 !important;
  }
  /* addon: edit/machingbrackets.js & addon: edit/matchtags.js */
  .cm-s-docz-dark .CodeMirror-matchingbracket,
  .cm-s-docz-dark .CodeMirror-matchingtag {
    border-bottom: 2px solid #81a1c1;
    color: #d8dee9 !important;
    background-color: transparent;
  }
  .cm-s-docz-dark .CodeMirror-nonmatchingbracket {
    border-bottom: 2px solid #bf616a;
    color: #d8dee9 !important;
    background-color: transparent;
  }
  /* addon: fold/foldgutter.js */
  .cm-s-docz-dark .CodeMirror-foldmarker,
  .cm-s-docz-dark .CodeMirror-foldgutter,
  .cm-s-docz-dark .CodeMirror-foldgutter-open,
  .cm-s-docz-dark .CodeMirror-foldgutter-folded {
    border: none;
    text-shadow: none;
    color: #d8dee9 !important;
    background-color: transparent;
  }
  /* addon: selection/active-line.js */
  .cm-s-docz-dark .CodeMirror-activeline-background {
    background-color: rgba(67, 76, 94, 0.32);
  }
  /* basic syntax */
  .cm-s-docz-dark .cm-attribute {
    color: #8fbcbb;
  }
  .cm-s-docz-dark .cm-keyword {
    color: #81a1c1;
  }
  .cm-s-docz-dark .cm-def {
    color: #d8dee9;
  }
  .cm-s-docz-dark .cm-atom {
    color: #81a1c1;
  }
  .cm-s-docz-dark .cm-number {
    color: #b48ead;
  }
  .cm-s-docz-dark .cm-property {
    color: #d8dee9;
  }
  .cm-s-docz-dark .cm-qualifier {
    color: #88c0d0;
  }
  .cm-s-docz-dark .cm-variable,
  .cm-s-docz-dark .cm-variable-2 {
    color: #88c0d0;
  }
  .cm-s-docz-dark .cm-variable-3 {
    color: #d8dee9;
  }
  .cm-s-docz-dark .cm-string,
  .cm-s-docz-dark .cm-string-2 {
    color: #a3be8c;
  }
  .cm-s-docz-dark .cm-operator {
    color: #81a1c1;
  }
  .cm-s-docz-dark .cm-meta {
    color: #81a1c1;
  }
  .cm-s-docz-dark .cm-comment {
    color: #4c566a;
  }
  .cm-s-docz-dark .cm-error {
    color: #bf616a;
  }
  /* markdown */
  .cm-s-docz-dark .cm-header {
    color: #88c0d0;
  }
  .cm-s-docz-dark .cm-quote {
    color: #4c566a;
  }
  .cm-s-docz-dark .cm-link {
    color: #88c0d0;
    text-decoration: none;
  }
  .cm-s-docz-dark .cm-url {
    color: #d8dee9;
    text-decoration: underline;
  }
  .cm-s-docz-dark .cm-strong {
    font-weight: bold;
  }
  .cm-s-docz-dark .cm-em {
    font-style: italic;
  }
  /* diff */
  .cm-s-docz-dark .cm-negative {
    color: #bf616a;
  }
  .cm-s-docz-dark .cm-positive {
    color: #a3be8c;
  }
  /* html */
  .cm-s-docz-dark .cm-tag {
    color: #81a1c1;
  }
`;

const Scrollbar = styled__default(PerfectScrollbar)`
  overflow: auto;
  position: relative;
  max-height: ${p => 25 * p.linesToScroll}px;

  .ps__rail-y {
    z-index: 9;
    opacity: 0.4;
  }
`;
const preStyles = __chunk_1.get('styles.pre');
const EditorStyled = styled__default(reactCodemirror2.Controlled)`
  ${theme$1};
  ${theme};
  position: relative;
  flex: 1;

  .CodeMirror {
    max-width: 100%;
    height: 100%;
  }

  .CodeMirror-gutters {
    left: 1px !important;
  }

  .CodeMirror-lines {
    padding: 10px 0;
    box-sizing: content-box;
  }

  .CodeMirror-line {
    padding: 0 10px;
  }

  .CodeMirror-linenumber {
    padding: 0 7px 0 5px;
  }

  &,
  .CodeMirror pre {
    ${preStyles};
  }
`;
const scrollbarOpts = {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20,
  suppressScrollX: true
};

const noCurrent = val => !val || !val.current;

const CodeMirror = props => {
  const {
    themeConfig
  } = docz.useConfig();
  const editor = React.useRef(null);
  const forceUpdateEditorTimeout = React.useRef(0);
  const previousEditor = React.useRef(0);
  const linesToScroll = themeConfig.linesToScrollEditor || 14;
  const editorProps = Object.assign({}, props, {
    editorDidMount: codemirror => {
      props.editorDidMount && props.editorDidMount(codemirror);
      editor.current = codemirror;
    }
  });

  const refreshCodeMirror = () => {
    if (noCurrent(editor)) return;
    editor.current.refresh();
  };

  const clearForceUpdateCodeMirror = () => {
    if (noCurrent(forceUpdateEditorTimeout)) return;
    clearTimeout(forceUpdateEditorTimeout.current);
  };

  const forceUpdateCodeMirror = () => {
    if (noCurrent(editor)) return;
    clearForceUpdateCodeMirror();
    forceUpdateEditorTimeout.current = setTimeout(() => {
      const currentHeight = editor.current.getScrollInfo().height || 0;
      const hasNoHeight = currentHeight <= 0; // Don't refresh if no height (CodeMirror is not visible) or
      // Don't refresh if same height

      if (hasNoHeight || previousEditor === currentHeight) return;
      refreshCodeMirror();
      previousEditor.current = editor.current.getScrollInfo().height || 0;
    });
  };

  React.useEffect(() => {
    forceUpdateCodeMirror();
    return () => clearForceUpdateCodeMirror();
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(ScrollbarStyles, null), React.createElement(Scrollbar, {
    options: scrollbarOpts,
    linesToScroll: linesToScroll
  }, React.createElement(EditorStyled, Object.assign({}, editorProps))));
};

exports.default = CodeMirror;
