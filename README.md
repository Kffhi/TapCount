# 快捷记账应用

一个极简的个人记账应用，专注于快速记账和支出统计。

## 页面设计

### 主页面（单页面设计）
```
主界面
├─ 顶部操作栏
│  ├─ 月份选择器
│  └─ 设置按钮（右上角）
│
├─ 支出统计区域
│  ├─ 本月支出总额
│  └─ 分类支出比例图
│
├─ 支出记录列表
│  ├─ 按日期分组显示
│  ├─ 支持下拉刷新
│  └─ 支持搜索筛选
│
└─ 快速记账按钮（右下角悬浮）

设置面板（弹出式）
├─ 分类管理
├─ 通知权限
└─ 其他设置
```

## 核心功能

### 1. 快速记账
- 支付通知识别
  - 自动获取支付宝/微信支付信息
  - 智能识别金额和商家信息
  - 轻量级确认弹窗
- 手动记账
  - 金额输入
  - 分类选择
  - 备注(可选)

### 2. 支出统计
- 当月支出总览
  - 总支出金额
  - 分类占比图表
- 支出记录列表
  - 按日期分组
  - 支持搜索
  - 支持筛选

### 3. 分类管理
- 预置分类
  - 日常饮食
  - 交通出行
  - 购物消费
  - 生活服务
  - 其他支出
- 分类设置
  - 自定义分类
  - 分类排序
  - 关键词规则

## 技术实现

### 本地存储
- SQLite数据库
  - 账目记录表
  - 分类配置表
  - 规则匹配表

### 通知服务
- 安卓通知监听
- 文本解析模块
- 快速记账弹窗

## 项目结构
```
src/
  ├── core/          
  │   ├── notification/  # 通知监听
  │   ├── parser/       # 解析引擎
  │   └── storage/      # 数据存储
  ├── screens/          
  │   ├── record/      # 记账相关
  │   ├── statistics/  # 统计相关
  │   └── settings/    # 设置相关
  ├── components/      # 通用组件
  └── utils/          # 工具函数
```

## 开发计划

### 第一阶段：基础记账
1. 实现通知监听和解析
2. 开发快速记账弹窗
3. 完成手动记账功能

### 第二阶段：数据管理
1. 分类管理系统
2. 支出记录查询
3. 基础统计图表

### 第三阶段：优化完善
1. 解析引擎优化
2. UI交互优化
3. 性能优化

## 环境要求
- Android 7.0+
- React Native 0.73.x
- Node.js >= 18.0.0

## 安装和运行

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
