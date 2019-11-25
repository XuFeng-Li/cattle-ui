import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

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
    /**  Button type */
    variant: PropTypes.oneOf(['success', 'normal', 'warning', 'alert']),
  };
  
  Test.defaultProps = {
    variant: 'success',
  };

  export default Test