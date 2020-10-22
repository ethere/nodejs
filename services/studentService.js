const Student = require('../models/Student');
const Class = require('../models/Class');
require("../models/relation")
const { Op } = require('sequelize');

exports.addStudent = async function(obj){
    return await Student.create(obj)
}
exports.deleteStudent = async function(id){
    return await Student.destroy({
        where:{
            id
        }
    })
}
exports.updateStudent = async function(id,obj){
    return await Student.update(obj,{
        where:{
            id
        }
    })
}

exports.findStudentByName = async function(name){
    const result = await Student.findOne({
        where:{
            name
        },
        include:[Class]
    })
    return result.toJSON()
}

exports.findStudentByPage = async function (page,limit,name,sex=-1){
    if(sex = -1){
        sex = 0
    }
    const result = await Student.findAll({
        offset: (page - 1) * limit,
        limit,
        where:{
            name:{
                [Op.like]:`%${name}%`
            },
            sex,
        },
        attributes:["name","sex"]
    })
    return JSON.parse(JSON.stringify(result))
}
exports.getStudentAndTotal = async  function (page,limit,name){
    const result = await Student.findAndCountAll({
        offset:page * limit,
        where:{
            name:{
                [Op.like]:`%${name}%`
            }
        }
    })
    return {
        count:result.count,
        students:JSON.parse(JSON.stringify(result.rows))
    }
}