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

require('./index.less');
var InputButton = function (_a) {
    var placeholder = _a.placeholder;
    return (createElement("div", { className: 'cattle_test_ts' },
        createElement(Input, { placeholder: placeholder }),
        createElement(Button, null, "Submit"),
        createElement(Upload, null, "\u4E0A\u4F20"),
        "211"));
};

export { InputButton };
