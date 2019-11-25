import React from 'react';
import PropTypes from 'prop-types';

const Test = () => {
    return <div>123456</div>
};

Test.propTypes = {
    /**
     * Button label
     */
    label: PropTypes.string.isRequired,
    /** on click event handler */
    onClick: PropTypes.func,
    /**  Button type22 */
    variant: PropTypes.oneOf(['success', 'normal', 'warning', 'alert']),
  };
  
  Test.defaultProps = {
    variant: 'success',
  };

  export default Test