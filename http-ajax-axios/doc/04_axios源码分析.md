## 0. 学习文档
    https://juejin.im/post/5b0ba2d56fb9a00a1357a334

## 1. 源码目录结构
    ├── /dist/                     # 项目输出目录
    ├── /lib/                      # 项目源码目录
    │ ├── /adapters/               # 定义请求的适配器 xhr、http
    │ │ ├── http.js                # 实现http适配器(包装http包)
    │ │ └── xhr.js                 # 实现xhr适配器(包装xhr对象)
    │ ├── /cancel/                 # 定义取消功能
    │ ├── /core/                   # 一些核心功能
    │ │ ├── Axios.js               # axios的核心主类
    │ │ ├── dispatchRequest.js     # 用来调用http请求适配器方法发送请求的函数
    │ │ ├── InterceptorManager.js  # 拦截器的管理器
    │ │ └── settle.js              # 根据http响应状态，改变Promise的状态
    │ ├── /helpers/                # 一些辅助方法
    │ ├── axios.js                 # 对外暴露接口
    │ ├── defaults.js              # axios的默认配置 
    │ └── utils.js                 # 公用工具
    ├── package.json               # 项目信息
    ├── index.d.ts                 # 配置TypeScript的声明文件
    └── index.js                   # 入口文件

## 2. 源码分析
### 1). axios与Axios的关系
### 2). axios为什么能有多种发请求的方法?
    axios函数对应的是Axios.prototype.request方法通过bind(Axiox的实例)产生的函数
    axios有Axios原型上的所有发特定类型请求的方法: get()/post()/put()/delete()
    axios有Axios的实例上的所有属性: defaults/interceptors
    后面又添加了create()/CancelToken()/all()

### 3). axios.create()返回的对象与axios的区别?
    相同: 
        都是一个能发任意请求的函数: request(config)
        都有发特定请求的各种方法: get()/post()/put()/delete()
        都有默认匹配和拦截器的属性: defaults/interceptors
    不同:
        默认匹配的值很可能不一样
        instance没有axios后面添加的一引起方法: create()/CancelToken()/all()

### 4). axios的请求/响应拦截器是什么?

### 5). axios的请求/响应数据转换器是什么?

### 6). response的整体结构

### 7). error的整体结构

### 8). axios运行的整体流程

### 9). config是如何起作用的?

### 10). Axios.prototype.request()都做了什么?

### 11). dispatchrequest()都做了什么?

### 12). 如何取消已经发送的请求?





