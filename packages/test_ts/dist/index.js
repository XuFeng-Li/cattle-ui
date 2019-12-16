'use strict';



function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');

var InputButton = function (_a) {
    var placeholder = _a.placeholder, children = _a.children;
    return (React.createElement("div", { className: 'cattle_test_ts' },
        React.createElement(antd.Input, { placeholder: placeholder }),
        children));
};

exports.InputButton = InputButton;
