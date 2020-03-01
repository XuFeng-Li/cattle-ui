import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import fetcher from '../mockFetcher/fetch.js'
import { storiesOf } from "@storybook/react";
import PanelSudoku from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

// 正常为 'string'
registerFormField(
  "PanelListSelect",
  connect({
    getProps: (outputProps, fieldProps) => {
     
    },
  })(PanelSudoku)
);

storiesOf("PanelListSelect", module)
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
            line: {
              type: "string",
              "x-component": "PanelListSelect",
              "x-props": {
                fetcher: '',
                api: '/admin/scheme/family/category_query',
                categoryInfo: {
                  name: '踢脚线'
                },
                placement: 'left'
              },
              title: "选择线条"
            }
          }
        }}
      />
    );
  });
