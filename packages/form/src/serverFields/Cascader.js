import React, { Component } from 'react';
import { Cascader } from 'antd';
import { isArr, isFn } from 'cattle-util';

class SvCascader extends Component {
  static defaultProps = { };

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      const other = {};
      return {
        value: state.value,
        ...other,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this)
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
      list: props.options || [],
    };
  }

  handleChange = value => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({ value });
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData(data = {} ){
    const { fetchServer = () => {}, afterFetch, params, options } = this.props;
    if(isArr(options) && !options.length) return;
    if(!isFn(fetchServer)) return false;
    const response = await fetchServer({...params, ...data});
    if(!response || !response.success) return;
    const { result } = response;
    const list = isFn(afterFetch) ? afterFetch(result) : result
    this.setState({ list })
  }

  render() {
    const {
      fieldNames = { label: 'name', value: 'id', children: 'list' }, // 默认为类目的
      className,
      params,
      ...others
    } = this.props;
    const { value, list } = this.state;
    return (
      <Cascader
        allowClear 
        className={className}
        value={value}
        fieldNames={fieldNames}
        showSearch
        placeholder='请选择'
        {...others}
        options={list}
        onChange={this.handleChange}
      />
    );
  }
}

export default SvCascader;
