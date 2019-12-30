import React, { Component, Fragment } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

const { RangePicker } = DatePicker;
// moment(null, 'HH:mm:ss')
class CsRangePicker extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      const other = {}
      return {
        value: nextProps.value,
        ...other
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue: props.value;
    this.state = {
      value
    };
  }

  handleChange = (time) => {
    const [sM, eM] = time
    const { onChange, format} = this.props;
    if (onChange) {
      onChange(sM && eM && [sM.format(format), eM.format(format)]);
    } else {
      this.setState({})
    }
  };

  render() {
    const { sT, eT, format, ...rest} = this.props;
    const { value = []} = this.state;
    const [startTime = sT, endTime=eT] = value;
    let valueArr = null;
    if(startTime && endTime) {
      valueArr = [moment(startTime, format), moment( endTime, format)]
    }
    return (
      <Fragment>
        <RangePicker
          {...rest}
          value={valueArr}
          format={format}
          onChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

// HH:mm:ss

CsRangePicker.defaultProps = {
  format: 'YYYY-MM-DD',
};

CsRangePicker.propTypes = {
  format: PropTypes.string,
};

export default CsRangePicker;

