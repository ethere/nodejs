const { serialize } = require('v8');
const Service = require('./services/adminServices.js');
Service.addAdmin({
    account:"2018",
    name:'test',
    password:'test'
})
Service.addAdmin({
    account:"2017",
    name:"huifang",
    password:"123456"
})
Service.deleteAdmin(2).then(res=>{
    console.log(res)
})
Service.updateAdmin(1,{
    account:"2019",
    name:'test',
    password:'test'
})