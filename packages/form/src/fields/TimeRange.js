import React, { Component, Fragment } from 'react';
import { 
 TimePicker } from 'antd';
import moment from 'moment';
class TimeRange extends Component {

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

  handleChange = (timeMom, timeStr, index) => {
    const { value = [] } = this.state;
    value[index] = timeStr;
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    } else {
      this.setState({})
    }
  };

  render() {
    const {format = 'HH:mm:ss', sT, eT} = this.props;
    const { value = []} = this.state;
    const [startTime = sT, endTime=eT] = value;
    return (
      <Fragment>
        <TimePicker onChange={(timeMom, timeStr) => {this.handleChange(timeMom, timeStr, 0)}} format={format} defaultValue={startTime ? moment(startTime, format) : null} />
        <span style={{padding: '4px'}}>--</span>
        <TimePicker onChange={(timeMom, timeStr) => {this.handleChange(timeMom, timeStr, 1)}} format={format} defaultValue={endTime ? moment(endTime, format) : null} />
      </Fragment>
    )
  }
}

export default TimeRange;

