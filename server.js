const http = require('http');
const url = require('url');

function handleReq(req){
    console.log('有请求来了!');
    const urlObj = url.parse(req.url);
    console.log('请求路径',urlObj);
    console.log('请求方法',req.method);
    console.log('请求头',req.headers)
}

const server = http.createServer((req,res)=>{
    handleReq(req);
    res.setHeader('a','1');
    res.setHeader('b','2');
    res.write('adalkfd');
    res.end()
});

server.listen(6100);

server.on('listening',()=>{
    console.log('server listening 6100');
})