import * as React from "react";
import PropTypes from 'prop-types';
import { isStr, simplifyFileName, trim, isFn } from "cattle-util";
import addonHoc from './common/addon/index';
import { InputNumber } from "antd";
import styles from './index.less';


const PanelInputNumber = addonHoc(InputNumber)
PanelInputNumber.propTypes = {
  /**
   * 自定义前缀 
   */
  addonBefore: PropTypes.string.isRequired,
  /** 
   * 自定义后缀 
   */
  addonAfter: PropTypes.string.isRequired,
}
PanelInputNumber.defaultProps = {
  addonBefore: 'mm',
  addonAfter: 'mm'
}
export default PanelInputNumber;
