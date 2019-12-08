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
    var placeholder = _a.placeholder;
    return (React.createElement("div", null,
        React.createElement(antd.Input, { placeholder: placeholder }),
        React.createElement(antd.Button, null, "Submit"),
        React.createElement(antd.Upload, null, "\u4E0A\u4F20")));
};

exports.InputButton = InputButton;
