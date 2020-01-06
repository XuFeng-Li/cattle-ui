import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import PanelInput from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelInput",
  connect({
    getProps: (outputProps, fieldProps) => {
      mapStyledProps(outputProps, fieldProps);
      let value = trim(outputProps.value);
      if (outputProps.maxlen) {
        value = value.substring(0, outputProps.maxlen);
      }
      outputProps.value = value;
    },
    getComponent: mapTextComponent
  })(PanelInput)
);

storiesOf("PanelInput", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      content: Readme,
      sidebar: Usage
    }
  })
  .add("uform", () => {
    return (
      <SchemaForm
        labelCol={4}
        wrapperCol={16}
        schema={{
          type: "object",
          properties: {
            length: {
              type: "string",
              "x-component": "PanelInput",
              "x-props": {
                "addonBefore": '平方米',
                "addonAfter": '平方米',
              },
              title: "长度"
            }
          }
        }}
      />
    );
  });
