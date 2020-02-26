import * as React from "react";
import PropTypes from 'prop-types'
import { isStr, simplifyFileName, trim, isFn } from "cattle-util";
import { Switch } from "antd";


const PanelCheckbox = props => {
  return <Switch {...props} />;
};

export default PanelCheckbox;
