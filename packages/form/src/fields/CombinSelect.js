import React, { Component, Fragment} from 'react';
import {
  Select,
} from 'antd';

const { Option } = Select;
class CombinSelect extends Component {

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

  selectChange = (obj) => {
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
    const { disabled, width, setting = [] } = this.props;
    const { value } = this.state;
    return (
      <div className="HouseTypeSelect">
        {setting.map((ele, i) => {
          const {name, label, options} = ele
          return (
            <Fragment key={-i}>
              <Select disabled={disabled} value={value[name]} onChange={(val) => {this.selectChange({[name]: val})}} style={{width: width || '40%'}}> 
                {options.map((op, k) => <Option key={-k} value={op.value}>{op.label || op.value}</Option>)}
              </Select>
              &nbsp;{label}&nbsp;&nbsp;
            </Fragment>
            )
        })}
      </div>
    );
  }
}

export default CombinSelect;
