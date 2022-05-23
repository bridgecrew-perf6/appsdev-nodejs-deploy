# appsdev-nodejs-deploy

## 课程大纲
- NodeJs 介绍
- 简单 Web Server
- 调试 & 项目初始化
- 单元测试 & 发布
- 基础 API
- NodeJs 爬虫示例

## NodeJs Introduction
- Node.js is a JavaScript runtime built on Chrome's V8
- Node.js uses an event-driven, non-blocking I/O model

### Non-blocking I/O model
- Blocking: I/O时进程休眠等待I/O完成后进行下一步
- Non-blocking: I/O时函数立即返回，进程不等待I/O完成

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

### Thread
- 线程：进程内一个相对独立的、可调度的执行单元，与同属一个进程的线程共享进程的资源
- 多线程：启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一块执行多个任务

### NodeJs Single Thread
- 单线程只是针对主进程，I/O操作系统底层是多线程调度的
- 单线程并不是单进程

### NodeJs Work Module
![NodeJs Work Module](https://raw.githubusercontent.com/sipingme/appsdev-nodejs-deploy/master/readme/nodejs-work-model.png)

### NodeJs 常见场景
- Web Server
- 本地代码构建
- 实用工具开发

```javascript
node demo/01_run.js
node --inspect-brk demo/01_run.js
```

## Environment & Debug

### Environment
- CommonJS 是 NodeJs 的模块规范
- global 对象，表示的是全局对象
- process 表示的是当前执行的进程

### CommonJS
- 每个文件是一个模块，有自己的作用域，也就是说一个文件只能有一个模块
- 在模块内部 module 变量代表模块本身
- module.exports 属性代表模块对外接口

### require Rules
- '/' 表示绝对路径，'./' 表示相对于当前文件所在的路径
- 支持 js、json、node 扩展名，不写的话将依次尝试
- 不写路径则认为是 build-in 模块或者各级 node_modules 内的第三方模块

### require Features
> module 被加载的时候执行，加载后缓存（只加载一次）
>
> 一旦出现某个模块被循环加载，就只输出已经执行的部门，还未执行的部分不会输出

```javascript
node demo/05_main.js
```

> Use build-in modules
```javascript
cd demo
node 06_fs.js
```

> Use third party modules
```javascript
npm install chalk@2.0.1
node demo/07_chalk.js
```
> exports VS module.exports
```javascript
node demo/08_main.js
```

### global
- CommonJS
- Buffer, process, console
- timer
- global

### process

> process.argv, process.argv0, process.execArgv, process.execPath
```javascript
const { argv, argv0, execArgv, execPath } = process;
argv.forEach(item => { console.log(item); });
console.log(argv0);
console.log(execArgv);
console.log(execPath);
```

> process.env
```javascript
const { env } = process;
console.log(env);
```

> process.cwd()
```javascript
console.log(process.cwd());
```

> process.nextTick(() => {})
```javascript
setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
    console.log('setTimeout');
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});
```

### global
```javascript
global.testVar = 1000;
```

### Debug

> Inspector

> #### [Chrome DevTools 55+, Microsoft Edge](https://nodejs.org/en/docs/guides/debugging-getting-started/)
> 
> - Option 1: Open chrome://inspect in a Chromium-based browser or edge://inspect in Edge. Click the Configure button and ensure your target host and port are listed.
>
> - Option 2: Copy the devtoolsFrontendUrl from the output of /json/list (see above) or the --inspect hint text and paste into Chrome.

> VS Code

- debug

![VS Vode Debug](https://raw.githubusercontent.com/sipingme/appsdev-nodejs-deploy/master/readme/nodejs-vscode-debug.png)

- debug with condition

![VS Vode Debug](https://raw.githubusercontent.com/sipingme/appsdev-nodejs-deploy/master/readme/nodejs-vscode-debug-condition.png)

## NodeJS Basic API

### path

- normalize
- join
- resolve
- basename extname dirname
- parse format
- sep delimiter win32 posix

> normalize

```javascript
const { normalize } = require('path');
console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));
```

> join

```javascript
const { join } = require('path');
console.log(join('/usr', 'local', 'bin/'));
console.log(join('/usr', '../local', 'bin/'));
```

> resolve

```javascript
const { resolve } = require('path');
console.log(resolve('./'));
```

> basename, extname, dirname

```javascript
const { basename, dirname, extname } = require('path');
const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));
```

