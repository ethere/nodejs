const Mock = require("mockjs")
const result = Mock.mock({
    "datas|20":[
        {
            "id|+1":1,
            name:"教育技术学 @id 班",
            time:"@date"
        }
    ]
}).datas;
const Class = require("../models/Class");
Class.bulkCreate(result)