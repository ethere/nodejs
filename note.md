mysql2  运行效率比较高

mysql 是官方的

1. 安装

npm i mysql2

2. 导入

3. 创建一个数据库连接
   1. host  主机（ip或域名）
   2. user  数据库的账号
   3. password 数据库的密码
   4. database 数据库的名称
   5. multipleStatements:true  可以运行多条sql语句，默认只能默认一条sql语句

connection.end() 断开连接

4. 运行sql语句

connection.query('sql语句',callback)

回调函数第一个参数为错误，第二个参数为响应的数据

> 还可以使用promise的方式来操作数据库

> 防止mql注入，使用execute而不使用query来运行sql语句

**使用连接池**

```js
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    waitForConnections:true,
    connectionLimit:10,//最大的连接数量
    queueLimit:0//0代表不限制排队的长度
})
```

不用手动去断开连接，会自动断开