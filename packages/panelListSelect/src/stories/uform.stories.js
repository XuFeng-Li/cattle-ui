import React from "react";
import { registerFormField, connect } from "@uform/react-schema-renderer";
import { trim, beforeTrim } from "cattle-util";
import { SchemaForm, mapStyledProps, mapTextComponent } from "@uform/antd";
import mockFetcher from '../mockFetcher/fetch.js'
import PanelConfigProvider from 'cattle-panel-config-provider'
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
      <PanelConfigProvider fetcher={mockFetcher}>
        <SchemaForm
          labelCol={4}
          wrapperCol={16}
          value={{
            line: {
              itemInfo: {
                "code": "BSC-CB-0002",
                "name": "乳胶漆天花",
                "type": "FACE_FAMILY_TYPE",
                "categoryId": 864,
                "categoryName": "窗套",
                "bimFile": "https://asman-client.oss-cn-hangzhou.aliyuncs.com/dev/family/BSC-CB-0002/BSC-CB-0002.rfa",
                "bimFileMd5": "c5a9e30f449ee5c4368467042413d3df",
                "img": "https://asman-client.oss-cn-hangzhou.aliyuncs.com/dev/family/BSC-CB-0002/BSC-CB-0002.png"
              }
            },
            name: 'xu'
          }}
          schema={{
            type: "object",
            properties: {
              line: {
                type: "string",
                "x-component": "PanelListSelect",
                "x-props": {
                  api: '/admin/scheme/family/family_query',
                  propsParams: {
                    categoryName: '踢脚线',
                    categoryId: 861,
                  },
                  placement: 'left'
                },
                title: "选择线条"
              },
              name: {
                type: 'string',
                title: '名字'
              }
            }
          }}
        />
      </PanelConfigProvider>
    );
  });
