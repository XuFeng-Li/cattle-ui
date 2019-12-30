import React, { Component, Fragment} from 'react';
import {
  Input
} from 'antd';

class CombinInput extends Component {

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      const propsValue = nextProps.value || {};
      return {
        value: {...propsValue},
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: {roomNum: '', livingRoomNum: ''}
    };
  }

  inputChange = (obj) => {
    const {value} = this.state;
    const { onChange} = this.props;
    const extendValue = {...value, ...obj}
    if (onChange) {
      onChange(extendValue);
    } else {
      this.setState(extendValue);
    }
  }

  render() {
    const { disabled, width, setting = []} = this.props;
    const { value} = this.state;
    return (
      <div className="HouseTypeSelect">
        {setting.map((ele, i) => {
          const {name, label} = ele
          return (
            <Fragment key={-i}>
              <Input placeholder='请输入' value={value[name]} disabled={!!disabled} style={{width: width || '40%'}} onChange={(e) => {this.inputChange({[name]: e.target.value})}} />
              &nbsp;{label}&nbsp;&nbsp;
            </Fragment>
            )
        })}
      </div>
    );
  }
}

export default CombinInput;
