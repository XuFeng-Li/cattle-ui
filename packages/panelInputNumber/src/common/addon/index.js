/**
 * 用于 Input, InputNumber这种简单组件，添加前后缀
 */
import * as React from "react";
import styles from "./index.less";


export default function addonHOC(WrapperComponent) {
  return class extends React.PureComponent {
    static defaultProps = {
      addonAfter: "mm",
      addonBefore: "",
    };
    constructor(props) {
      super(props);
    }
    static displayName = `${WrapperComponent.name}`
    render() {
      const { addonAfter, addonBefore, ...others } = this.props;
      return (
        <div className={styles["addon__container"]}>
          {addonBefore && (
            <div className={styles["addon__before"]}>{addonBefore}</div>
          )}
          <div className={styles["addon__self"]}>
            <WrapperComponent {...others} />
          </div>
          {addonAfter && (
            <div className={styles["addon__after"]}>{addonAfter}</div>
          )}
        </div>
      );
    }
  };
}
