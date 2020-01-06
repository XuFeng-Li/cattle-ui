import * as React from "react";
import PropTypes from 'prop-types'
import { isStr, simplifyFileName, trim, isFn } from "cattle-util";
import { Input } from "antd";

const PanelInput = props => {
  return <Input {...props} />;
};
PanelInput.propTypes = {
  /**
   * 自定义前缀 
   */
  addonBefore: PropTypes.string.isRequired,
  /** 
   * 自定义后缀 
   */
  addonAfter: PropTypes.string.isRequired,
}
PanelInput.defaultProps = {
  addonBefore: 'mm',
  addonAfter: 'mm'
}
export default PanelInput;
