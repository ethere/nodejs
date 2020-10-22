const { Op } = require('sequelize');
const Book = require('../models/Book');

exports.addBook = async function(bookObj){
    //方式一
    // const ins = Book.build(bookObj);
    // const res = await ins.save();
    //方式二
    const res = await Book.create(bookObj);

    return res;
}
exports.deleteBook = async function(id){
    //方式一
    // const ins = Book.findByPk(id);
    // const res = (await ins).destroy();

    //方式二
    const res = await Book.destroy({
        where:{
            id,
        }
    })

    return res;
}
exports.updateBook = async function(id,obj){
    return await Book.update(obj,{
        where:{
            id,
        }
    })
}

exports.getCount = async function(){
    return await Book.count()
}

exports.getBookByname = async function(name){
    const result = await Book.findAll({
        where:{
            name:{
                [Op.like]:`%${name}%`
            }
        }
    });
    return JSON.parse(JSON.stringify(result))
}

exports.getBookByPage = async function(page,limit){
    const result = await Book.findAll({
        offset:limit * page,
        limit
    })
    return JSON.parse(JSON.stringify(result))
}