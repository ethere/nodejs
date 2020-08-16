// node中的全局属性global
// console.log(global);

// console.log(global.global === global);

// const timer = setTimeout(()=>{
//     console.log('ok')
// },0);
// node中的timer返回的是一个对象
// console.log(timer)

// 返回当前文件所在的目录的绝对地址
// console.log(__dirname);
// 返回当前文件所在的绝对地址
// console.log(__filename);

// 立即执行 相当于 setTimeout 0
// setImmediate(()=>{
//     console.log('ok')
// })

// 类型化数组
// console.log(Buffer.from('abcdef','utf-8'))

// 返回当前nodejs进程的工作目录
// console.log(process.cwd());

// setTimeout(()=>{
//     console.log('ok')
// },1000);
// 强制退出当前node进程
// process.exit()

// 获取命令中的所有参数所在的绝对路径
// console.log(process.argv)

// 获取当前的操作系统平台版本
// console.log(process.platform)

// 获取环境变量，返回的是一个对象
// console.log(process.env)

// 根据pid结束一个进程
// console.log(process.kill(9028))