import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import "antd/dist/antd.css";
import { storiesOf } from "@storybook/react";
import PanelConfigProvider from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";

storiesOf("PanelConfigProvider", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      content: Readme,
      sidebar: Usage
    }
  })
  .add("simple", () => {
    return (
      // <SchemaForm
      //   labelCol={4}
      //   wrapperCol={16}
      //   schema={{
      //     type: "object",
      //     properties: {
      //       length: {
      //         type: "boolean",
      //         "x-component": "PanelSwitch",
      //         title: "是否有地暖"
      //       }
      //     }
      //   }}
      // />
      <div>hello</div>
    );
  });
