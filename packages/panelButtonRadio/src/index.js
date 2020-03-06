import React from "react";
import cs from "classnames";
import styles from "./index.less";
import { Radio } from "antd";

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const defaultProps = {
  valueType: "value"
};

class RadioButtonGroup extends React.PureComponent {
  render() {
    const { options, ...others } = this.props;

    return (
      <RadioGroup {...others}>
        {options &&
          options.length > 0 &&
          options.map(option => {
            if (typeof option === "string") {
              // 此处类型自动推导为 string
              return (
                <RadioButton
                  key={option}
                  value={option}
                >
                  {option}
                </RadioButton>
              );
            }
            // 此处类型自动推导为 { label: string value: string }
            return (
              <RadioButton
                key={`radio-group-value-options-${option.value}`}
                value={option.value}
              >
                {option.label}
              </RadioButton>
            );
          })}
      </RadioGroup>
    );
  }
}

export default RadioButtonGroup;
