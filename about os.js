const os = require('os');

// 一行的结束符
console.log(os.EOL);

// cpu 架构名
console.log(os.arch());

// cpu 内核
console.log(os.cpus().length);

// 可用内存
console.log(os.freemem());

// 当前用户路径
console.log(os.homedir());

// 用户名
console.log(os.hostname());

// 操作系统的临时目录
console.log(os.tmpdir());