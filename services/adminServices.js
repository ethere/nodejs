const Admin = require('../modules/Admin');

exports.addAdmin = async function(adminObj){
   //方式一
//    const ins = Admin.build(adminObj);
//    await ins.save();

   //方式二
   const ins = await Admin.create(adminObj);

   console.log('已添加到数据库啦')
   return ins.toJSON()
}
exports.deleteAdmin = async function(adminId){
    //方式一
    // const ins = await Admin.findByPk(adminId);
    // if(ins){
    //     ins.destroy()
    // }

    //方式二
    Admin.destroy({
        where:adminId
    })
    console.log('删除成功啦');
    return ins;
}
exports.updateAdmin = async function(adminId,adminObj){
    //方式一
    const ins = Admin.findByPk(adminId);
    ins.name = adminObj.name;
    ins.password = adminObj.password;
    
    //方式二
    Admin.update({
        where:adminId,
        adminObj
    })
    console.log('更新成功啦')
    return res;
}