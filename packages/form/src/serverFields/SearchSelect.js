import React, { Component } from 'react';
import { Select } from 'antd';
import { isArr, isFn, mapToObject } from 'cattle-util';

class SearchSelect extends Component {
  static defaultProps = {
    loadOnce: false
  };

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

  handleSearch = value => {
    const { searchKey = 'name', onSearch, loadOnce} = this.props;
    !loadOnce && this.fetchData({[searchKey]: value})
    if(isFn(onSearch)) {
      onSearch()
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  getFieldStr = (key) => {
    const { fieldNames = {} } = this.props;
    if(key === 'value') return fieldNames.value || 'value';
    if(key === 'label') return fieldNames.label || 'label';
  }

  // 数据去重合并
  listAccumulate = (newList = []) => {
    const { list = [] } = this.state;
    const valueKey =  this.getFieldStr('value')
    const listMap = mapToObject(list, valueKey)
    if(isArr(newList)) {
      newList.forEach(ele => {
        const value = ele[valueKey]
        if(listMap[value]) delete listMap[value]
      })
      return newList.concat(Object.values(listMap))
    }
    return list;
  }

  async fetchData(data = {} ){
    const { fetchServer, afterFetch, params, options } = this.props;
    if(isArr(options) && !options.length) return;
    if(!isFn(fetchServer)) return false;
    // this.setState({loading: true});
    const response = await fetchServer({...params, ...data});
    // this.setState({loading: false});
    if(!response || !response.success) return;
    const { result } = response;
    let list = isFn(afterFetch) ? afterFetch(result) : result
    list = this.listAccumulate(list);
    this.setState({ list })
  }

  getItemLabel = (item) => {
    const label = this.getFieldStr('label');
    const labelList = label.split('/'); 
    if(labelList.length > 1) {
      const value1 = item[labelList[0]] || '--'
      const value2 = item[labelList[1]] || '--'
      return `${value1}/${value2}`
    } 
    return item[label] || item.name
  }

  render() {
    const {
      fieldNames = { label: 'label', value: 'value' },
      className,
      params,
      ...others
    } = this.props;
    const { value, list } = this.state;

    const children = list.map(item => {
      return (
        <Select.Option
          key={item[fieldNames.value]}
          value={item[fieldNames.value]}
        >
          {this.getItemLabel(item)}
        </Select.Option>
      );
    });
    return (
      <Select
        allowClear 
        className={className}
        value={value}
        optionFilterProp='children'
        showSearch
        placeholder='请选择'
        {...others}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
      >
        {children}
      </Select>
    );
  }
}

export default SearchSelect;
