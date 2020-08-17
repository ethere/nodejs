const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname,'1.txt');

// fs.readFile(filepath,(err,content)=>{
//     console.log(content)
// })

// fs.readFile(filepath,'utf-8',(err,content)=>{
//     console.log(content)
// })

// fs.readFile(filepath,{
//     encoding:'utf-8'
// },(err,content)=>{
//     console.log(content)
// })

fs.promises.readFile(filepath,"utf-8").then(content=>{
    console.log(content)
})
