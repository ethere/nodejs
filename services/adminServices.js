const Admin = require('../models/Admin');
const md5 = require('md5')

exports.addAdmin = async function (adminObj) {
    adminObj.password = md5(adminObj.password)
    const ins = await Admin.create(adminObj);
    return ins.toJSON()
}
exports.deleteAdmin = async function (adminId) {
    const ins = await Admin.destroy({
        where: {
            id:adminId
        }
    })
    return ins;
}
exports.updateAdmin = async function (id, adminObj) {
    if(adminObj.password){
        adminObj.password = md5(adminObj.password)
    }
    const result = await Admin.update(adminObj, {
        where: {
            id,
        },
    });
    return result.toJSON();
}

exports.login = async function (name,password){
   password = md5(password)
   const result = await Admin.findOne({
        where:{
            name,
            password,
        }
    });
    if(result && result.name === name){
        return result.toJSON();
    }
    return null;
}

exports.getAllAdmin = async function(){
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result))
}

exports.findById = async function (id){
    const result = await Admin.findByPk(id);
    return result.toJSON()
}

exports.getCount = async function(){
    const result = await Admin.count();
    return result;
}