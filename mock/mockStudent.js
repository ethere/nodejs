const Mock = require("mockjs")
const result = Mock.mock({
    "datas|500-700":[{
        name:"@cname",
        birth:"@date",
        "sex|1-2":true,
        tel:/1\d{10}/,
        "ClassId|1-20":0
    }]
}).datas;

const Student = require("../models/Student");
Student.bulkCreate(result)
