const Class = require('../modules/Class.js');

exports.addClass = async function(obj){
    return await Class.create(obj)
}
exports.deleteClass = async function(id){
    return await Class.destroy({
        where:{
            id
        }
    })
}
exports.updateClass = async function(id,obj){
    return await Class.update(obj,{
        where:{
            id
        }
    })
}
