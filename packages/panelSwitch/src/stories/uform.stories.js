import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import PanelSwitch from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelSwitch",
  connect({
    getProps: (outputProps, fieldProps) => {
     
    },
  })(PanelSwitch)
);

storiesOf("PanelSwitch", module)
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
              type: "boolean",
              "x-component": "PanelSwitch",
              title: "是否有地暖"
            }
          }
        }}
      />
    );
  });
