import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import PanelSelect from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelSelect",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelSelect)
);

storiesOf("PanelSelect", module)
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
              "x-component": "PanelSelect",
              "x-component-props": {
                "addonBefore": '平方米',
                "addonAfter": '平方米',
              },
              enum: [
                "1",
                "2",
                "3"
              ],
              title: "长度"
            }
          }
        }}
      />
    );
  });
