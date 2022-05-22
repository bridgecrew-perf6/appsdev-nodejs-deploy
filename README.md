# appsdev-nodejs-deploy

## 课程大纲
- NodeJs 介绍
- 简单 Web Server
- 调试 & 项目初始化
- 单元测试 & 发布
- 基础 API
- NodeJs 爬虫示例

## NodeJs 介绍
- Node.js is a JavaScript runtime built on Chrome's V8
- Node.js uses an event-driven, non-blocking I/O model

### 非阻塞I/O - Non-blocking I/O model
- 阻塞：I/O时进程休眠等待I/O完成后进行下一步
- 非阻塞：I/O时函数立即返回，进程不等待I/O完成

### 事件驱动
- I/O等异步操作结束后的通知
- 观察者模式

### 为什么偏爱 NodeJs
- 前端职责范围变大，统一开发体验
- 在处理高并发、I/O密集场景性能优势明显

### CPU 密集 VS I/O 密集
- CPU 密集：压缩、解压、加密、解密
- I/O 密集：文件操作、网络操作、数据库

### WEB 常见场景
- 静态资源读取
- 数据库操作
- 渲染页面

### 高并发对应之道