const net = require('net');

const socket = net.createConnection({
    port:'80',
    host:'duyi.ke.qq.com'
},()=>{
    console.log('连接成功')
})

socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`)

socket.on('connect',()=>{
    console.log('连接成功')
})

let receive = null

socket.on('data',(data)=>{
    let response = data.toString('utf-8');
    // console.log(response);
    if(!receive){
       receive = analysis(response);
       if(isOver()){
         socket.end()
       };
       return;
    }
    receive.body = receive.body + response;
    if(isOver()){
        socket.end();
    };
})

function isOver(){
    let len = +receive.total;
    return receive.body.length >= len
}

function analysis(response){
    let index = response.indexOf('\r\n\r\n');
    let head = response.slice(0,index);
    let body = response.slice(index+4);
    let headparts = head.split('\r\n').map(item=>{
        return item.split(':')
    }).slice(1).reduce((a,b)=>{
        a[b[0]] = b[1]
        return a
    },{})
    return {
        'total': headparts['Content-Length'],
        'body':body
    }
}

socket.on('close',()=>{
    console.log(receive.body)
    console.log('关闭了')
})
