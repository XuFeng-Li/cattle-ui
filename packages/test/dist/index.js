

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('./node_modules/react'));
var PropTypes = _interopDefault(require('./node_modules/prop-types'));

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

  /**  Button type */
  variant: PropTypes.oneOf(['success', 'normal', 'warning', 'alert'])
};
Test.defaultProps = {
  variant: 'normal'
};

module.exports = Test;
//# sourceMappingURL=index.js.map
