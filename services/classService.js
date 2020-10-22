const Class = require('../models/Class.js');

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
exports.getCount = async function(){
    const result = await Class.count();
    return result;
}
exports.getClass = async function(){
    const result = await Class.findAll();
    return JSON.parse(JSON.stringify(result));
}
exports.getClassById = async function(id){
    const result = await Class.findByPk(id);
    return result.toJSON();
}
