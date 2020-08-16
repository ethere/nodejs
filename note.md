npm i -D @types/node

global.global = global;
window.window = window;

node中的setTimeout返回的是一个对象

setImmediate 相当于 setTimeout 0

v8引擎自带的一些东西：setTimeout,setInterval,setImmediate,console

__dirname 获取当前文件目录的绝对路径，并非global上的属性
__filename 获取当前文件的绝对路径，并非global上的属性

Buffer 类型化数组，继承自UInt8Array

exit()
- 0 正常
- 1 错误

platform 获取的是平台版本