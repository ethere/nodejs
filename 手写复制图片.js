const fs = require('fs');
const path = require('path');

let filename = path.resolve(__dirname,'1.jpg');
let filepath = path.resolve(__dirname,'1.copy.jpg');
fs.promises.readFile(filename).then(res=>{
    fs.promises.writeFile(filepath,res).then(()=>{
        console.log('图片复制成功')
    });
})