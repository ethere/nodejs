const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./abc.txt');

const ws = fs.createWriteStream(filename,{
    encoding:'utf-8',
    flags:'a',
    highWaterMark:3
});

let flag = ws.write('a');
console.log(flag);
flag = ws.write('b');
console.log(flag)
flag = ws.write('c');
console.log(flag)
flag = ws.write('d');
console.log(flag)
flag = ws.write('a啦');
console.log(flag)
ws.on('drain',()=>{
    console.log('栈空')
})
ws.end('写入完成')
ws.on('close',()=>{
    console.log('文件关闭')
})
