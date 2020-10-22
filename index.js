// const AdminService = require('./services/adminServices.js');
// AdminService.login("蒋芳","flzGWJ441").then(res=>{
//     console.log(res);
//     console.log("=============================")
// })
// AdminService.getAllAdmin().then(res=>{
//     console.log(res)
// })
// AdminService.findById(10).then(res=>{
//     console.log(res)
// })
// AdminService.getCount().then(res =>{
//     console.log(res)
// })

// const StudentService = require('./services/studentService');
// StudentService.findStudentByName('卢静').then(res=>{
//     console.log(res);
//     console.log(res.Class.name);
// })
// StudentService.findStudentByPage(2,10,'秀').then(res=>{
//     console.log(res)
// })
// StudentService.getStudentAndTotal(2,10,'洋').then(res=>{
//     console.log(res)
// })

// const ClassService  = require('./services/classService');
// ClassService.getCount().then(res=>{
//     console.log(res);
//     console.log('====================')
// })
// ClassService.getClass().then(res=>{
//     console.log(res)
// })
// ClassService.getClassById(5).then(res=>{
//     console.log('======================');
//     console.log(res)
// })

const BookService = require('./services/bookService');
BookService.getCount().then(res=>{
    console.log(res);
    console.log('==========================')
})
BookService.getBookByname('人').then(res=>{
    console.log(res)
})
BookService.getBookByPage(3,5).then(res=>{
    console.log('=========================')
    console.log(res)
})