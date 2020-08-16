const path = require('path');

// console.log(path.basename('a/b/c/d'));
// console.log(path.basename('a/b/c/d.html'));
// console.log(path.basename('a/b/c/d.html','.html'));
// console.log(path.basename('a/b/c/d.html','html'));
// console.log(path.basename('a/b/c/d.js','.html'));

// 路径名的分隔符
// console.log(path.sep);

// 多个路径间的分隔符
// console.log(path.delimiter);

// 返回文件所在目录
// console.log(path.dirname('a/b/c/d.js'));
// console.log(path.dirname('a/b/c/d'))

// 返回扩展名
// console.log(path.extname('a/b/c/d.js'));
// console.log(path.extname('a/b/c/d'))

// 多个路径的拼接
// console.log(path.join('a/b/c/d','a/b/c','index.js'));

// 修正不正确的路径
// console.log(path.normalize('a//b/c/d///e/index.html'));

// 第二个路径相对于第一个路径的路径
// console.log(path.relative('a/b/c/d','a/b/e/f/index.js'));

// 绝对路径
// console.log(path.resolve('./a')); // ./为process.cwd()，即命令行的路径
// console.log(path.resolve('/a')); 