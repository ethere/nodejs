const AdminSev = require('./services/adminServices');

AdminSev.addAdmin({
    name:'ba',
    password:'adadfk',
    account:'2092'
}).then(res=>{
    console.log(res)
})