import React from 'react';
import PropTypes from 'prop-types';
import { InputButton } from 'test-ts-zlb';

const Test = () => {
    return (
      <div className='test'>
        <InputButton type='primary'>12139998888</InputButton>
      </div>)
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