This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

组件开发项目，产生可用组件api文档

### 项目特性说明
- 支持 js 和 ts 开发
- ts支持 CSS module  (2020.1.9) 
- 样式文件处理优化（加入autoprefixer，cssnano 插件），样式文件单处抽离 （2020.1.11）
- 加入文件js文件压缩 (2020.1.13)

### 暂不支持特性
- 图片资源引入

### 稳定组件列表 (待完善)


### 安装node_modules

1. 安装共同依赖包
   - yarn
2. 安装packages下的私有依赖包
   - lerna bootstrap
3. 开发时候安装内部依赖
   - lerna add cattle-util --scope=cattle-info (例子)

### 打包

1. 打包所有包
   - lerna run build #(使用lerna和rollup为各个组件打包)
2. 单个打包
   - lerna run build --scope=XXX

### 运行步骤（执行安装和全部打包）

 - npm run storybook

### 发布 

- https://registry.npm.taobao.org/  https://registry.npmjs.org/    http://192.168.2.140:4873/
1. 设置发布源地址
   - npm config set registry XXX
2. npm账号注册
   - npm adduser
   - whoami
3. 全部发布
   - lerna publish
4. 单个发布
   - lerna publish --force-publish cattle-info

### question 

1. .gitignore无效问题
   - git rm -r --cached dist
2. markdown语法地址
   - https://www.runoob.com/markdown/md-lists.html
3. dependencies, devDependencies, peerDependencies 对应安安装参数
   - npm install xx --save | --save-dev | --save-peer 
4. 如果运行出错，可能要删掉node_modules重新安装

5. ts 中引入 .less不识别问题
   - 新增 typss/index.d.ts文件
   - tsconfig.json 中 include 配置识别 typss/index.d.ts

