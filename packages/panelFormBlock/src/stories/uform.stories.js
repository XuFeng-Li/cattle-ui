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
import PanelBlock from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";


// 全局注册
// registerVirtualBox(
//   'panelFormCard',
//   Card
// )

storiesOf("PanelBlock", module)
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
          block: PanelBlock
        }}
        labelCol={4}
        wrapperCol={16}
        schema={{
          type: "object",
          properties: {
            xxx: {
              type: "object",
              "x-component": "block",
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
