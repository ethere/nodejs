const Mock = require("mockjs");
const result = Mock.mock({
    "datas|5":[{
        name:"@cname",
        password:/[a-z]{3}[A-Z]{3}\d{3}/,
        account:/\d{6}/
    }]
}).datas;
const Admin = require("../models/Admin");
Admin.bulkCreate(result)