// 发送网络请求模块
const {EventEmitter} = require('events');
const http = require('http');

module.exports = class extends EventEmitter{
    constructor(url,options){
        super();
        this.url = url;
        this.options = options;
    }
    send(body=''){
        const request = http.request(this.url,this.options,res=>{
            let result = '';
            res.on('data',chunk=>{
                result += chunk.toString('utf-8');
            });
            res.on('end',()=>{
                this.emit('res',res.headers,result)
            })
        });
        request.write(body);
        request.end()
    }
}

