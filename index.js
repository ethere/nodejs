const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, './1.txt');
const to = path.resolve(__dirname, './2.txt');

// const rs = fs.createReadStream(from);
// const ws = fs.createWriteStream(to);
// console.time('方式一')
// rs.on('data',chunk=>{
//     let flag = ws.write(chunk);
//     if(!flag){
//         rs.pause()
//     }
// })

// ws.on('drain',()=>{
//     rs.resume()
// })

// console.time('方式二')
// rs.pipe(ws)

// rs.on('end',()=>{
//     console.log('复制完成');
//     // console.timeEnd('方式一');
//     console.timeEnd('方式二')
// })

console.time('方式三');
fs.promises.readFile(from).then(data => {
    fs.promises.writeFile(to, data).then(() => {
        console.timeEnd('方式三')
    })
});