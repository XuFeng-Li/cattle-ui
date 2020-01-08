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
          "x-component": "radio",
          enum: [
            "1",
            "2",
            "3",
            "4",
          ],
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
        putie: {
          type: "string",
          enum: [
            {
              key: 1,
              value: 'BM-XT-SM-0004',
              name: '瓷砖',
              img: 'https://img.asman.com.cn/assets/1567159387205_15543.png'
            },
            {
              key: 2,
              value: 'BM-XT-SM-0003',
              name: '木地板',
              img: 'https://img.asman.com.cn/assets/1567159401605_51882.png'
            },
            {
              key: 3,
              value: 'BM-XT-SM-0010',
              name: '大理石',
              img: 'https://img.asman.com.cn/assets/1567159401568_64748.png'
            },
            {
              key: 4,
              value: 'BM-XT-SM-0011',
              name: '大理石',
              img: 'https://img.asman.com.cn/assets/1567159401568_64748.png'
            }
          ],
          "x-component": "PanelImgRadio",
          title: "铺贴方式"
        }, 
        hasHot: {
          type: "boolean",
          "x-component": "PanelSwitch",
          // "x-props": {
          //   labelCol: 4,
          //   wrapperCol: 10
          // },
          title: "是否有地暖"
        }, 
        startPoint: {
          type: "string",
          "x-component": "PanelSudoku",
          title: "起铺点"
        },
      }
    }}/>
  })
