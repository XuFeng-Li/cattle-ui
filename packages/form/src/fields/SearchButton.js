import React, { Component } from "react";
import {
    FormButtonGroup,
    Submit,
    Reset,
  } from '@uform/antd'

class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.name = '';
    }

    render() {
        return (
          <FormButtonGroup style={{ minWidth: 150 }}>
            ​<Submit>查询</Submit>​
            <Reset>重置</Reset>​
          </FormButtonGroup>
        )
    }
}

export default SearchButton;
