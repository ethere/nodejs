const mysql = require("mysql2/promise");

async function test(id){
    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123123',
        database:'company',
        multipleStatements:true
    });
    const [results] = await connection.query('select * from `employee` where `id` = 1');
    console.log(results);
    connection.end()
}
test()



