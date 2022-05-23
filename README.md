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
- basename, extname, dirname
- parse, format
- sep, delimiter, win32, posix

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

> basename, dirname, extname

```javascript
const { basename, dirname, extname } = require('path');
const filePath = '/usr/local/bin/no.txt';

console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));
```

> parse, format

```javascript
const { parse, format } = require('path');
const filePath = '/usr/local/node_modules/n/package.json';
const ret = parse(filePath);

console.log(ret);
console.log(format(ret));
```

> sep, delimiter, win32, posix

```javascript
const { sep, delimiter, win32, posix } = require('path');

console.log('sep:', sep);
console.log('win sep:', win32.sep);
console.log('PATH:', process.env.PATH);
console.log('delimiter', delimiter);
console.log('win delimiter', win32.delimiter);
```

> __dirname vs process.cwd() vs path.resolve('./')

```javascript
const path = require('path');
const mod = require('./02_cusmod');

console.log(mod.testVar);
console.log('__dirname', __dirname);
console.log('process.cwd()', process.cwd());
console.log("path.resolve('./')", path.resolve('./'));
```

### Buffer

- Buffer 用于处理二进制数据流
- 实例类似整数数组，大小固定
- C++ 代码在 V8 堆外分配物理内存

> Buffer.alloc(), Buffer.allocUnsafe(), Buffer.from()

```javascript
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5, 1));

console.log(Buffer.allocUnsafe(5, 1));

console.log(Buffer.from([1, 2, 3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));
```

>  Buffer.byteLength, Buffer.isBuffer(), Buffer.concat()

```javascript
console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));

const buf1 = Buffer.from('This ');
const buf2 = Buffer.from('is ');
const buf3 = Buffer.from('a ');
const buf4 = Buffer.from('test ');
const buf5 = Buffer.from('!');
const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5]);
console.log(buf.toString());
```

> buf.length, buf.toString(), buf.fill(), buf.equals(), buf.indexOf(), buf.copy()

```javascript
const buf = Buffer.from('This is a test!');
console.log(buf.length);

const buf2 = Buffer.allocUnsafe(10);
buf2[0] = 2;
console.log(buf2.length);

console.log(buf.toString());
console.log(buf.toString('base64'));

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
console.log(buf3.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('st'));
console.log(buf4.indexOf('ast'));

const buf7 = Buffer.allocUnsafe(5);
buf6.copy(buf7, 0 ,i);
```

> string_decoder

```javascript
const stringDecode = require('string_decoder');
const decoder = new stringDecode.StringDecoder('utf-8');
const buf = Buffer.from('中文字符串！');

for (let i = 0; i < buf.length; i+=5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0 ,i);
  console.log(b.toString());
}

for (let i = 0; i < buf.length; i+=5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0 ,i);
  console.log(decoder.write(b));
}
```

### events

大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。
例如：net.Server 对象会在每次有新连接时触发事件；fs.ReadStream 会在文件被打开时触发事件；流对象 会在数据可读时触发事件。

所有能触发事件的对象都是 EventEmitter 类的实例，这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 命名。

当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都被同步地调用，监听器的返回值会被丢弃。

例子：一个绑定了一个监听器的 EventEmitter 实例。eventEmitter.on() 方法用于注册监听器，eventEmitter.emit()方法用于触发事件。

> event

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});
myEmitter.emit('event');
```

> event with param

```javascript
const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();
ce.on('error', (err, time) => {
  console.log(err);
  console.log(time);
});
ce.emit('error', new Error('oops!'), Date.now());
```

> event with once

```javascript
const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();
ce.once('test', () => {
  console.log('Test event');
});
setInterval(() => {
  ce.emit('test');
}, 500);
```

> event with remove

```javascript
const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

function fn1 () {
  console.log('fn1');
}

function fn2 () {
  console.log('fn2');
}

const ce = new CustomEvent();
ce.on('test', fn1);
ce.on('test', fn2);
setInterval(() => {
  ce.emit('test');
}, 500);

setTimeout(() => {
  // ce.removeListener('test', fn1);
  // ce.removeListener('test', fn2);
  ce.removeAllListeners('test');
}, 1500);
```

### fs

文件 I/O 是由简单封装的标准 POSIX 函数提供。通过 require('fs') 使用该模块，所有的方法都有异步和同步的形式。

异步方法的最后一个参数都是一个回调函数，传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。如果操作成功完成，则第一个参数会是 null 或 undefined。

当使用同步方法时，任何异常都会被立即抛出，可以使用 try / catch 来处理异常，或让异常向上冒泡。

异步方法的例子：

```javascript
const fs = require('fs');
fs.unlink('tmp/hello', (err) => {
  if (err) throw err;
  consloe.log('成功删除 /tmp/hello);
});
```

> readfile

```javascript
const fs = require('fs');

fs.readFile('./demo/32_readfile.js', (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(data.toString());
});

const data = fs.readFileSync('./demo/01_run.js', 'utf8');
console.log(data);
```
