const http = require('http');

const request = http.request("http://duyi.ke.qq.com/",{
    method: 'GET'
},resq=>{
    console.log('服务器响应的状态码',resq.statusCode);
    console.log('服务器响应头',resq.headers);
    let result = '';
    resq.on('data',chunk=>{
        result += chunk.toString('utf-8')
    })
    resq.on('end',chunk=>{
        console.log(result)
    })
});
request.end();//请求消息体的结束