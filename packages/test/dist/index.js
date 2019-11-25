'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Test = function Test() {
  return React.createElement("div", null, "123456");
};

Test.propTypes = {
  /**
   * Button label
   */
  label: PropTypes.string.isRequired,

  /** on click event handler */
  onClick: PropTypes.func,

  /**  Button type22 */
  variant: PropTypes.oneOf(['success', 'normal', 'warning', 'alert'])
};
Test.defaultProps = {
  variant: 'success'
};

module.exports = Test;
//# sourceMappingURL=index.js.map
