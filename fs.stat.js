const fs = require('fs');
const path = require('path');

// const filepath = path.resolve(__dirname,'1.txt');

// fs.promises.stat(filepath).then(result=>{
//     console.log(result)
// })

const filepath = path.resolve(__dirname,'abc');

fs.promises.stat(filepath).then(result=>{
    console.log(result);
    console.log(result.isFile());
    console.log(result.isDirectory())
})
