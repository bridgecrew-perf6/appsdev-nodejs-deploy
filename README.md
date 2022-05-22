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
- 增加机器数
- 增加每台机器的 CPU 数 - 多核

### 进程 - 执行中的程序
- 进程：是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
- 多进程：启动多个进程，多个进程可以一块执行多个任务

### 线程
- 线程：进程内一个相对独立的、可调度的执行单元，与同属一个进程的线程共享进程的资源
- 多线程：启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务

### NodeJs 单线程
- 单线程只是针对主进程，I/O操作系统底层是多线程调度的
- 单线程并不是单进程

### NodeJs 工作模型
![NodeJs 工作模型图](https://raw.githubusercontent.com/sipingme/appsdev-nodejs-deploy/master/readme/nodejs-work-model.png)

### NodeJs 常见场景
- Web Server
- 本地代码构建
- 实用工具开发

## 环境 & 调试
