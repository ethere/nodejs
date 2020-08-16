cpu 只和内存打交道

fs中大多数的api都是异步

## fs.readFile()

异步

里面可写三个参数

- path
- 配置参数 可以是一个对象也可以是字符串
- 回调函数

```js
fs.readFile('./a') // ./ 相对的是命令提示符
//因此尽量写绝对的路径
```
./除了在require是相对当前所在的模块外，其他地方都是相对命令提示符的路径

回调函数中的第一个参数用于存放错误信息

```js
content.toString("utf-8") //将content转换为字符
```
Sync函数是同步的，会导致js运行阻塞，极其影响性能
通常，在程序启动时运行有限的次数即可

```js
fs.readFileSync() //同步
```

fs.promises.readFile 与 fs.readFile功能一样，只不过里面不使用回调模式而是使用promise

## fs.writeFile

三个参数

如果文件不存在则会新建
如果目录不存在会报错

- path
- content 写入的内容
- 配置参数
  - flag 标识，怎么操作文件
    - a 追加
  - encoding(编码方式) 默认是utf-8

目录在操作系统中是一个文件，文件内容为一个指针指向文件的地址，没什么实质的内容，因此size为0