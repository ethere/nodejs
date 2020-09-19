const mysql = require("mysql2/promise");

async function test(id){
    const pool = await mysql.createPool({
        host:'localhost',
        user:'root',
        password:'123123',
        database:'company',
        multipleStatements:true
    });
    const [results] = await pool.execute('select * from `employee` where `id` = ?',[id]);
    console.log(results);
}
test(5)



