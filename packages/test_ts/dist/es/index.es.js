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
import { Input } from 'antd';

var InputButton = function (_a) {
    var placeholder = _a.placeholder, children = _a.children;
    return (createElement("div", { className: 'cattle_test_ts' },
        createElement(Input, { placeholder: placeholder }),
        children));
};

export { InputButton };
