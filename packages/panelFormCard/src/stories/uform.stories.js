import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import {
  registerFormField,
  registerVirtualBox,
  connect
} from "@uform/react-schema-renderer";
import {
  SchemaForm,
  Submit,
  mapStyledProps,
  mapTextComponent
} from "@uform/antd";
import "antd/dist/antd.css";
import PanelFormCard from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

const Card = ({ children, ...props }) => {
  return (
    <PanelFormCard {...props.schema.getExtendsComponentProps()}>
      {children}
    </PanelFormCard>
  );
};
// 全局注册
// registerVirtualBox(
//   'panelFormCard',
//   Card
// )

storiesOf("PanelFormCard", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      content: Readme,
      sidebar: Usage
    }
  })
  .add("simple", () => {
    return (
      <SchemaForm
        virtualFields={{
          card: Card
        }}
        labelCol={4}
        wrapperCol={16}
        schema={{
          type: "object",
          // properties: {
          //   length: {
          //     type: "string",
          //     "x-component": "PanelInput",
          //     "x-props": {
          //       "addonBefore": '平方米',
          //       "addonAfter": '平方米',
          //     },
          //     title: "长度"
          //   }
          // },
          properties: {
            xxx: {
              type: "object",
              "x-component": "card",
              "x-props": {
                title: "基本信息"
              },
              properties: {
                ddd2: {
                  type: "string",
                  title: "字段5"
                },
                eee2: {
                  type: "string",
                  title: "字段6"
                }
              }
            }
          }
        }}
      />
    );
  });
