const sequelize = require('./db');
require('./Admin');
require('./Student');
require('./Class');
require('./Book');
sequelize.sync({force:true}).then(()=>{
    console.log('所有模型均已成功同步.')
})