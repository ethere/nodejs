const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./1.txt');

const ws = fs.createWriteStream(filename,{
    encoding:'utf-8',
    highWaterMark:3
});
console.time('写入文件');
let i = 0;
function writer(){
     let flag = true;
     while(i < 1024*10 && flag){
        flag = ws.write('a');
        i++
     }
     if(i === 1024 *10 ){
        ws.end('写入完成')
    }
}
writer();
ws.on('drain',()=>{
    writer()
})
ws.on('close',()=>{
    console.timeEnd('写入文件')
    console.log('文件关闭')
})
