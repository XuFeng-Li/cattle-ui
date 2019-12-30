import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

class CsDatePicker extends Component {

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

  handleChange = (time, dataStr) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(dataStr);
    } else {
      this.setState({})
    }
  };

  disabledDate = (current) => {
    const { afterNow } = this.props;
    if(!afterNow) return false;
    return current && current < moment();
  }

  render() {
    const { format, ...rest} = this.props;
    let { value } = this.state;
    value = value && moment(value);
    return (
      <DatePicker
        format={format}
        showTime
        disabledDate={this.disabledDate}
        {...rest}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

// HH:mm:ss

CsDatePicker.defaultProps = {
  format: 'YYYY-MM-DD HH:mm:ss',
};

CsDatePicker.propTypes = {
  format: PropTypes.string,
};

export default CsDatePicker;

