const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123123',
    database:'company',
    multipleStatements:true
})
// connection.end()

connection.query('select * from `employee` where `id` = 1',(err,result)=>{
    console.log(result)
})