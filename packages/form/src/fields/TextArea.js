import React, { Component } from 'react';
import { 
  Input
} from 'antd';
import { beforeTrim } from 'cattle-util';

const { TextArea } = Input;
class CsTextArea extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value
    };
  }

  // eslint-disable-next-line react/sort-comp
  handleChange = (value) => {
    const { onChange, noTrim } = this.props;
    let tValue = value;
    if(noTrim) {
      tValue = value
    } else {
      tValue = beforeTrim(value)
    }
    if (onChange ) {
      onChange(tValue);
    }
    this.setState({value: tValue})
  };

  render() {
    const { noTrim, className, ...others} = this.props
    const { value} = this.state;

    return (
      <TextArea className={className} value={value} {...others} onChange={(e) => {this.handleChange(e.target.value)}} />
    )
  }
}

export default CsTextArea;

