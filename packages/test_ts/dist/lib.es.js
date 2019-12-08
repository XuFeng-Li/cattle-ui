function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { createElement } from 'react';
import { Input, Button, Upload } from 'antd';

var InputButton = function (_a) {
    var placeholder = _a.placeholder;
    return (createElement("div", null,
        createElement(Input, { placeholder: placeholder }),
        createElement(Button, null, "Submit"),
        createElement(Upload, null, "\u4E0A\u4F20")));
};

export { InputButton };
