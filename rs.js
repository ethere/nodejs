const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./abc.txt');

const rs = fs.createReadStream(filename,{
    encoding: 'utf-8',
    highWaterMark: 1
})

rs.on('open',()=>{
    console.log('文件打开了')
});
rs.on('error',()=>{
    console.log('出错了！！！')
});
rs.on('data',chunk=>{
    console.log('读取到数据：',chunk);
    pause()
});
function pause(){
    console.log('暂停了');
    rs.pause();
    resume()
}
function resume(){
    console.log('恢复了');
    rs.resume()
}
rs.on('end',()=>{
    console.log('数据读完了')
})
rs.on('close',()=>{
    console.log('文件关闭了')
});
// rs.close();