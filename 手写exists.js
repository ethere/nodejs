const fs = require('fs');
const path = require('path');

async function exists(filename){
    try {
        await fs.promises.stat(filename);
        return true;
    } catch (error) {
        return false;
    }
}
async function test(filename){
    const result = await exists(filename);
    console.log(result)
}
const filepath = path.resolve(__dirname,'abc/1.txt');
test(filepath);