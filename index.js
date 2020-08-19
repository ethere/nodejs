const net = require('net');
const fs = require('fs');
const path = require('path')

const server = net.createServer();

server.listen(9527); //服务器监听9537端口

server.on('listening', () => {
    console.log('server listening 9527')
})

server.on('connection', socket => {
    // console.log('有客户端连接到服务器了');

    socket.on('data',async chunk => {
        // console.log(chunk.toString('utf-8'));
        //写入html文件
        //     socket.write(`HTTP/1.1 200 OK
        // Date: Wed, 19 Aug 2020 02:18:33 GMT
        // Content-Type: text/html; charset=utf-8
        // Connection: keep-alive

        // <!doctype html><html><head><body>
        // <h1>你好呀</h1> 
        // </body></html>    
        //     `)

        // 返回一张图片
        let pathname = path.resolve(__dirname, './hsq.jpg');
        let imgBuffer = await fs.promises.readFile(pathname);
        let headBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`, "utf-8");
        let result = Buffer.concat([headBuffer, imgBuffer])
        socket.write(result)
        socket.end()

    });


    server.on('close', () => {
        console.log('连接断开啦')
    })
})