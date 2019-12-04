import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'antd/es/date-picker';
import { mapToObject } from 'cattle-util';
import Upload from 'cattle-upload';
import 'antd/es/date-picker/style';
// import { Upload } from 'antd';
require('./style.less');

function showInfo() {
  alert(123, mapToObject([{id: 3, value: 66}], 'id'))
  console.log(mapToObject([{id: 3, value: 66}], 'id'));
}

const Test = () => {
    return (
      <div className='test' onClick={() => { showInfo() }}>
        <Upload />
        <DatePicker/> 
        12345689899
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