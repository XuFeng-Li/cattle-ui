import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import styles from "./index.less";

const PanelSelect = (props) => {
  const {
    addonAfter,
    addonBefore,
    children,
    dataSource,
    key,
    ...others
  } = props;
  let options = children;
  if (dataSource) {
    // dataSource优先级高于children
    options = dataSource.map(item => {
      return (
        <PanelSelect.Option key={item.value}>{item.label}</PanelSelect.Option>
      );
    });
  }
  return (
    <div className={styles["panelform__select"]}>
      {addonBefore && <div className={styles["select__before"]}>{addonBefore}</div>}
      <div className={styles["select__self"]}>
        <Select {...others}>{options}</Select>
      </div>
      {addonAfter && <div className={styles["select__after"]}>{addonAfter}</div>}
    </div>
  );
};

PanelSelect.propTypes = {
  /**
   * 自定义前缀
   */
  addonBefore: PropTypes.string.isRequired,
  /**
   * 自定义后缀
   */
  addonAfter: PropTypes.string.isRequired
};
PanelSelect.defaultProps = {
  addonBefore: "",
  addonAfter: ""
};


PanelSelect.Option = Select.Option;
PanelSelect.OptGroup = Select.OptGroup;

export default PanelSelect