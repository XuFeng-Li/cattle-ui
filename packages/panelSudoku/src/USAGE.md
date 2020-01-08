### :smile: Usage

正常的组件使用方式

```js
import PanelInput from 'cattle/PanelInput';
```

基于 uForm使用

```js
// 注册组件（此处的全局注册）

registerFormField(
  "PanelInput",
  connect({
    getProps: (outputProps, fieldProps) => {
      
    },
  })(PanelInput)
);
```

<!-- PROPS -->
