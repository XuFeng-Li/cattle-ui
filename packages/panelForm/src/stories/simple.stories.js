import React from 'react';
import { storiesOf } from '@storybook/react';
import "antd/dist/antd.css"
import PanelForm from '../index';
import Readme from '../README.md';
import Usage from '../USAGE.md';


storiesOf('PanelForm', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: Readme,
      sidebar: Usage,
    },
  })
  .add('simple', () => {
    return <PanelForm schema={{
      type: "object",
      properties: {
        length: {
          type: "string",
          "x-component": "PanelInputNumber",
          // "x-props": {
          //   labelCol: 4,
          //   wrapperCol: 10
          // },
          "x-component-props": {
            "addonBefore": '平方米',
            "addonAfter": '平方米',
          },
          title: "长度"
        },
        width: {
          type: "string",
          "x-component": "PanelInputNumber",
          // "x-props": {
          //   labelCol: 4,
          //   wrapperCol: 10
          // },
          "x-component-props": {
            "addonBefore": '平方米',
            "addonAfter": '平方米',
          },
          title: "宽度"
        },
        one: {
          type: "string",
          "x-component": "PanelSelect",
          "enum": [
            "100",
            "200",
            "300",
          ],
          // "x-props": {
          //   labelCol: 4,
          //   wrapperCol: 10
          // },
          "x-component-props": {
            "addonBefore": '平方米',
            "addonAfter": '平方米',
          },
          title: "选择"
        }, 
      }
    }}/>
  })
