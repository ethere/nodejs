const fs = require('fs');

fs.readFile('./index.js',(err,data)=>{
    setTimeout(()=>console.log(1));
    setImmediate(()=>console.log(2))
})

//2
//1