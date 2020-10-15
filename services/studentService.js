const Student = require('../modules/Student');

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