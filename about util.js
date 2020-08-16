const util = require('util');

// 异步函数转回调函数
// async function test(duration=1000){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(duration)
//         }, duration);
//     })
// }
// test(500).then(d=>{
//     console.log(d)
// })

// let callBack = util.callbackify(test);
// callBack(500,(err,d)=>{
//     console.log(d)
// })

// 回调函数转异步函数
// function cb(duration,callback){
//     setTimeout(() => {
//         callback(null,duration)
//     }, duration);
// };
// // cb(500,(err,d)=>{
// //     console.log(d)
// // })
// let asyncFunc = util.promisify(cb);
// asyncFunc(1000).then(d=>{
//     console.log(d)
// })

// 判断两个对象是否深度严格相等
const obj1 = {
    a : 'a',
    b : 'b',
    c : {
        d : 'd',
        e : {
            f : 'f'
        }
    }
};
const obj2 = {
    a : 'a',
    b : 'b',
    c : {
        d : 'd',
        e : {
            f : 'f'
        }
    }
};
console.log(util.isDeepStrictEqual(obj1,obj2))