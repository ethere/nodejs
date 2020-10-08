const sequelize = require('./db');
require('./Admin');
const Student = require('./Student');
const Class = require('./Class');
require('./Book');
Class.hasMany(Student)
sequelize.sync({force:true}).then(()=>{
    console.log('所有模型均已成功同步.')
})