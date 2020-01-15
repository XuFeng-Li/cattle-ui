import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import { storiesOf } from "@storybook/react";
import PanelSudoku from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelSudoku",
  connect({
    getProps: (outputProps, fieldProps) => {
     
    },
  })(PanelSudoku)
);

storiesOf("PanelSudoku", module)
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
              "x-component": "PanelSudoku",
              title: "起铺点"
            }
          }
        }}
      />
    );
  });
