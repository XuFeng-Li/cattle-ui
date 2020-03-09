import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import PanelInputNumber from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelInputNumber",
  connect({
    getProps: (outputProps, fieldProps) => {}
  })(PanelInputNumber)
);

storiesOf("PanelInputNumber", module)
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
              "x-component": "PanelInputNumber",
              "x-props": {
                addonBefore: "平方米",
                addonAfter: "平方米",
                max: 10,
                min: 2
              },
              title: "长度"
            }
          }
        }}
      />
    );
  });
