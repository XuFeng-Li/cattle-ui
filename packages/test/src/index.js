import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'antd/es/date-picker';
import { mapToObject } from 'cattle-util';
import 'antd/es/date-picker/style';
import { Upload } from 'antd';
import Ud from 'cattle-upload';
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