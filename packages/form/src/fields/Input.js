import React, { Component } from 'react';
import { 
  Input
} from 'antd';
import { trim } from 'cattle-util';

// 'success', 'warning', 'error', 'validating' 状态 help 文案 hasFeedback 反馈文案
// 注：临时解决受控table里面input改变重新渲染后input失去焦点的问题, 
class CsInput extends Component {

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
    const { onChange, noTrim, type} = this.props;
    let tValue = value;
    if(noTrim) {
      tValue = value
    } else {
      tValue = trim(value)
    }
    // 正整数
    if(type === 'd') {
      tValue = tValue.replace(/[^\d]/g, '');
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
      <Input className={className} value={value} {...others} onChange={(e) => {this.handleChange(e.target.value)}} />
    )
  }
}

export default CsInput;

