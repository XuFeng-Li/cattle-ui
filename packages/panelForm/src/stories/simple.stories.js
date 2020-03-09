import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import PanelConfigProvider from 'cattle-panel-config-provider'
import mockFetcher from '../mockFetcher/fetch.js'
import { Select } from "antd";
import { SchemaForm, Field, FormItemGrid, Submit } from "@uform/antd";
import "antd/dist/antd.css";
import PanelForm from "../index";
import Readme from "../README.md";
import Usage from "../USAGE.md";
// let fetcher = axios.create({
//   method: 'post',
//   baseURL: 'http://192.168.2.131:18081',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-application-type': '3'
//   }
// })
const Option = Select.Option;

const mockData = [
  {
    code: "1",
    key: "1",
    name: "族1"
  },
  {
    code: "2",
    key: "2",
    name: "族2"
  }
];

const mockDataRes = {
}

const mockSchema = {
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
        addonBefore: "平方米",
        addonAfter: "平方米",
      },
      "x-rules": {
        
      },
      // readOnly: true,
      maximum: 10000,
      minimum: 10,
      title: "长度"
    },
    width: {
      type: "string",
      "x-component": "radio",
      enum: ["1", "2", "3", "4"],
      "x-component-props": {
        addonBefore: "平方米",
        addonAfter: "平方米"
      },
      title: "宽度"
    },
    one: {
      type: "string",
      "x-component": "PanelSelect",
      enum: ["100", "200", "300"],
      // "x-props": {
      //   labelCol: 4,
      //   wrapperCol: 10
      // },
      "x-component-props": {
        addonBefore: "平方米",
        addonAfter: "平方米"
      },
      title: "选择"
    },
    buttonRadio: {
      type: "string",
      "x-component": "PanelButtonRadio",
      enum: ["100", "200", "300"],
      // "x-props": {
      //   labelCol: 4,
      //   wrapperCol: 10
      // },
      "x-props": {
        buttonStyle: 'solid'
      },
      title: "buttonRadio"
    },
    putie: {
      type: "string",
      enum: [
        {
          key: 1,
          value: "BM-XT-SM-0004",
          name: "瓷砖",
          img: "https://img.asman.com.cn/assets/1567159387205_15543.png"
        },
        {
          key: 2,
          value: "BM-XT-SM-0003",
          name: "木地板",
          img: "https://img.asman.com.cn/assets/1567159401605_51882.png"
        },
        {
          key: 3,
          value: "BM-XT-SM-0010",
          name: "大理石",
          img: "https://img.asman.com.cn/assets/1567159401568_64748.png"
        },
        {
          key: 4,
          value: "BM-XT-SM-0011",
          name: "大理石",
          img: "https://img.asman.com.cn/assets/1567159401568_64748.png"
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
    lines: {
      type: "string",
      "x-component": "PanelListSelect",
      "x-props": {
        api: '/admin/scheme/family/page_query',
        propsParams: {
          categoryName: '踢脚线',
          categoryId: 861,
        },
        placement: 'right'
      },
      title: '线条配置'
    }
  }
};
const mockSchema2 = {
  type: "object",
  properties: {
    one: {
      type: "string",
      "x-component": "PanelSelect",
      enum: ["100", "200", "300"],
      // "x-props": {
      //   labelCol: 4,
      //   wrapperCol: 10
      // },
      "x-component-props": {
        addonBefore: "平方米",
        addonAfter: "平方米"
      },
      title: "选择"
    },
    putie: {
      type: "string",
      enum: [
        {
          key: 1,
          value: "BM-XT-SM-0004",
          name: "瓷砖",
          img: "https://img.asman.com.cn/assets/1567159387205_15543.png"
        },
        {
          key: 2,
          value: "BM-XT-SM-0003",
          name: "木地板",
          img: "https://img.asman.com.cn/assets/1567159401605_51882.png"
        },
        {
          key: 3,
          value: "BM-XT-SM-0010",
          name: "大理石",
          img: "https://img.asman.com.cn/assets/1567159401568_64748.png"
        },
        {
          key: 4,
          value: "BM-XT-SM-0011",
          name: "大理石",
          img: "https://img.asman.com.cn/assets/1567159401568_64748.png"
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
    }
  }
}

storiesOf("PanelForm", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea",
      content: Readme,
      sidebar: Usage
    }
  })
  .add("simple", () => {
    const [list, setList] = useState([]);
    const [schema, setSchema] = useState(mockSchema);
    const onSubmit = values => {
      console.log("values:", values);
    };
    const selectChange = value => {
      console.log("value: ", value);
      if(value === '1') {
        setSchema(mockSchema);
      } else {
        setSchema(mockSchema2);
      } 
      
    };
    useEffect(() => {
      setList(mockData)
      // fetcher.get('/admin/scheme/family/category_query',{
      //   params: {
      //     source: 1
      //   }
      // })
      // .then((res) => {
      //   console.log("category res: ", res)
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      //   setList(mockData)
      // })

      // fetcher.post('/admin/scheme/scheme_family/param',{
      //   body: {
      //     familyCode: 'BM-XT-SM-0004',
      //     schemeId: 0,
      //     source: 2
      //   }
      // })
      // .then((res) => {
      //   console.log("panel res: ", res)
      //   const data = {
      //     type: 'object',
      //     properties: res.data.result.properties
      //   }
      //   setSchema(data);
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
    }, []);
    return (
      <PanelConfigProvider fetcher={mockFetcher}>
        <div>
          <h2>族选择</h2>
          <Select style={{ width: "200px" }} onChange={selectChange}>
            {list.map(item => {
              return (
                <Option key={item.key} value={item.code}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <h2> 配置面板</h2>
          <PanelForm onSubmit={onSubmit} schema={schema}>
            <Submit className="form-submit">修改</Submit>
          </PanelForm>
        </div>
      </PanelConfigProvider>
    );
  });
