// const Service = require('./services/adminServices.js');
// Service.addAdmin({
//     account:"2018",
//     name:'test',
//     password:'test'
// })
// Service.addAdmin({
//     account:"2017",
//     name:"huifang",
//     password:"123456"
// })
// Service.deleteAdmin(3).then(res=>{
//     console.log('delete res',res)
// });
// Service.updateAdmin(4,{
//     name:'update2',
// }).then(res=>{
//     console.log('update res',res)
// });

// const bookService = require('./services/bookService.js');
// bookService.addBook({
//     img:"akdfjfakfadfk",
//     name:"book5",
//     author:"xiaofang",
//     time:new Date()
// })
// bookService.addBook({
//     img:"adkfafdkldaf",
//     name:"book2",
//     author:"xiaofang",
//     time:new Date()
// }).then(res=>{
//     console.log('添加成功啦');
//     console.log(res);
//     console.log('====================')
// })
// bookService.deleteBook(3).then(res=>{
//     console.log('删除成功啦 res',res)
// })
// bookService.updateBook(2,{
//     name:"book3"
// }).then(res=>{
//     console.log('更新成功啦');
//     console.log(res)
// })

// const classService = require("./services/classService");
// classService.addClass({
//     name:'add1',
//     time:new Date()
// }).then(res=>{
//     console.log('添加成功');
//     console.log(res)
// })
// classService.addClass({
//     name:'add2',
//     time:new Date()
// })
// classService.deleteClass(1).then(res=>{
//     console.log('删除成功');
//     console.log(res)
// });
// classService.updateClass(2,{
//     name:'update'
// }).then(res=>{
//     console.log('更新成功');
//     console.log(res)
// })

const studentService = require('./services/studentService');
// studentService.addStudent({
//     name:'student1',
//     sex:1,
//     birth:new Date(1999,10,10),
//     tel:'123'
// }).then(res=>{
//     console.log('添加学生成功');
//     console.log(res)
// })
// studentService.addStudent({
//     name:'student2',
//     sex:0,
//     birth:new Date(1999,9,9),
//     tel:'123'
// }).then(res=>{
//     console.log('添加学生成功');
//     console.log(res)
// })
studentService.deleteStudent(1).then(res=>{
    console.log('删除学生成功');
    console.log(res)
})
studentService.updateStudent(2,{
    name:'update'
}).then(res=>{
    console.log('更新学生成功')
})
