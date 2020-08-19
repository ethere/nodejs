const fs = require('fs');
console.time()
setTimeout(()=>{
    console.log('settimeout');
    console.timeEnd()
},200);

fs.readFile('./index.js',(err,data)=>{
    console.log('开始读文件');
    let time = Date.now();
    while(Date.now() - time < 300){}
})