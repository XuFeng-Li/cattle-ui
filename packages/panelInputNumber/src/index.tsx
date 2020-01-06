import * as React from "react";
import { isStr, simplifyFileName, trim, isFn } from "cattle-util";
import { InputNumber } from "antd";

interface IProps {
  /**
   * 自定义前缀
   */
  addonBefore: string,
  /**
   * 自定义后缀
   */
  addonAfter: string
}

const PanelInputNumber = (props: IProps) => {
  return <InputNumber {...props} />;
};
// PanelInputNumber.propTypes = {
//   /**
//    * 自定义前缀 
//    */
//   addonBefore: PropTypes.string.isRequired,
//   /** 
//    * 自定义后缀 
//    */
//   addonAfter: PropTypes.string.isRequired,
// }
PanelInputNumber.defaultProps = {
  addonBefore: 'mm',
  addonAfter: 'mm'
}
export default PanelInputNumber;
