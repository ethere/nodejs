const mysql = require("mysql2/promise");

async function test(id){
    const pool = await mysql.createPool({
        host:'localhost',
        user:'root',
        password:'123123',
        database:'company',
        multipleStatements:true
    });
    const [results] = await pool.query('select * from `employee` where `id` = 3');
    console.log(results);
}
test()



