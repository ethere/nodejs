const Admin = require('../modules/Admin');

exports.addAdmin = async function (adminObj) {
    //方式一
    //    const ins = Admin.build(adminObj);
    //    await ins.save();

    //方式二
    const ins = await Admin.create(adminObj);

    return ins.toJSON()
}
exports.deleteAdmin = async function (adminId) {
    //方式一
    // const ins = await Admin.findByPk(adminId);
    // if(ins){
    //     ins.destroy()
    // }

    //方式二
    const ins = await Admin.destroy({
        where: {
            id:adminId
        }
    })

    console.log('删除成功啦')
    return ins;
}
exports.updateAdmin = async function (id, adminObj) {
    // 方式1
    // 1. 得到实例
    // const ins = await Admin.findByPk(id);
    // ins.name = adminObj.name;
    // // 2. 保存
    // ins.save();

    // 方式2
    const result = await Admin.update(adminObj, {
        where: {
            id,
        },
    });

    console.log("更新成功啦")
    return result;
}