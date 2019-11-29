import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style';
require('./style.less');


const Test = () => {
    return <div className='test'><DatePicker/> 12345689899</div>
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