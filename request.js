const Request = require('./myRequest');
const { rawListeners } = require('process');

const res = new Request('http://duyi.ke.qq.com/');

res.send();
res.on('res',(head,body)=>{
    console.log('head',head);
    console.log('body',body)
})