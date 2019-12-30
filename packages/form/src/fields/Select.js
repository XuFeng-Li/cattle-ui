import React, { Component } from 'react';
import { Select } from 'antd';

class CsSelect extends Component {
  static defaultProps = {
    hideCheckAll: false,
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
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
    };
  }

  // eslint-disable-next-line react/sort-comp
  handleChange = value => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({ value });
  };

  handleSearch = value => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(value);
    }
  };

  render() {
    const {
      options = [],
      fieldNames = { label: 'label', value: 'value' },
      className,
      ...others
    } = this.props;
    const { value } = this.state;
    const children = options.map(item => {
      return (
        <Select.Option
          key={item[fieldNames.value]}
          label={item[fieldNames.label]}
          value={item[fieldNames.value]}
        >
          {item[fieldNames.label]}
        </Select.Option>
      );
    });
    return (
      <Select
        className={className}
        value={value}
        {...others}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
      >
        {children}
      </Select>
    );
  }
}

export default CsSelect;
