const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs')

async function getStat(filename){
    try {
        return await fs.promises.stat(filename)
    } catch (error) {
        return null
    }
}

async function getData(url){
    let urlOBj = URL.parse(url);
    let pathname = path.resolve(__dirname,'public',urlOBj.pathname.substr(1));
    let stat = await getStat(pathname);
    if(stat){
        if(stat.isDirectory()){
            pathname = path.resolve(pathname,'index.html');
            stat = await getStat(pathname);
            if(stat){
                return await  fs.promises.readFile(pathname)
            }else{
                return null
            }
        }
        return await fs.promises.readFile(pathname)
    }else{
        return null
    }
}

const server = http.createServer(async (req,res)=>{
    let data = await getData(req.url);
    if(data){
        res.write(data);
    }else{
        res.statusCode = 404;
        res.write("Resource is not exist")
    }
  
    res.end()
});

server.listen(6200);

server.on('listening',()=>{
    console.log('server listening 6200');
})