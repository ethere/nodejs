const fs = require('fs');
const path = require('path');

class File{
    constructor(filename,name,ext,isFile,size,createTime,updateTime){
        this.filename = filename;
        this.name = name;
        this.ext = ext;
        this.size = size;
        this.isFile = isFile;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
    static async createFile(filename){
        let statc =  await fs.promises.stat(filename);
        const name = path.basename(filename);
        const ext = path.extname(filename)
        const isFile = statc.isFile();
        const size = statc.size;
        const createTime = new Date(statc.ctime);
        const updateTime = new Date(statc.mtime);
        return new File(filename,name,ext,isFile,size,createTime,updateTime);
    }
    async getChildren(){
        if(this.isFile){
            return []
        }
        let childens = await fs.promises.readdir(this.filename);
        childens = childens.map((file)=>{
            const result = path.resolve(this.filename,file);
            return File.createFile(result)
        });
        return Promise.all(childens);
    }
    async getContent(isBuffer = false){
        if(this.isFile){
            if(isBuffer){
                return await fs.promises.readFile(this.filename);
            }
            return await fs.promises.readFile(this.filename,'utf-8')
        }
        return null;
    }
}

async function readDir(dirname){
    const file = await File.createFile(dirname);
    return await file.getChildren()
}

async function test(){
    const dirname = path.resolve(__dirname,'abc');
    const result = await readDir(dirname);
    const datas = await result[0].getChildren();
    console.log(datas)
}
test()