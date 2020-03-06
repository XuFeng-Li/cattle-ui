import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css"
import PanelButtonRadio from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

const transformDataSourceKey = (component, dataSourceKey) => {
  return ({ dataSource, ...others }) => {
    return React.createElement(component, {
      [dataSourceKey]: dataSource,
      ...others
    })
  }
}
// 正常为 'string'
registerFormField(
  "PanelButtonRadio",
  connect({
    getProps: (outputProps, fieldProps) => {
     
    },
  })(transformDataSourceKey(PanelButtonRadio, 'options'))
);

storiesOf("PanelButtonRadio", module)
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
              enum: [
                {
                  key: 1,
                  value: 'BM-XT-SM-0004',
                  label: '瓷砖',
                  img: 'https://img.asman.com.cn/assets/1567159387205_15543.png'
                },
                {
                  key: 2,
                  value: 'BM-XT-SM-0003',
                  label: '木地板',
                  img: 'https://img.asman.com.cn/assets/1567159401605_51882.png'
                },
                {
                  key: 3,
                  value: 'BM-XT-SM-0010',
                  label: '大理石',
                  img: 'https://img.asman.com.cn/assets/1567159401568_64748.png'
                },
                {
                  key: 4,
                  value: 'BM-XT-SM-0011',
                  label: '大理石',
                  img: 'https://img.asman.com.cn/assets/1567159401568_64748.png'
                }
              ],
              "x-component": "PanelButtonRadio",
              "x-props": {
                "buttonStyle": 'solid'
              },
              title: "瓷砖"
            }
          }
        }}
      />
    );
  });
