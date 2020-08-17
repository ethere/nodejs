const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,'./1.txt');

fs.unlink(filename,()=>{
    console.log('文件删除成功')
})