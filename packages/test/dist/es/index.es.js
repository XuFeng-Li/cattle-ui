import React from 'react';
import PropTypes from 'prop-types';

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

export default Test;
//# sourceMappingURL=index.es.js.map
