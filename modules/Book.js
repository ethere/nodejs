const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const { toUnicode } = require('punycode');

module.exports = sequelize.define('Book',{
    img:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    time:{
        type:DataTypes.TIME,
        allowNull:false
    }
},{
    createdAt:false,
    updatedAt:false,
    paranoid:true//从此以后，该表的数据不会真正的删除，而是增加一列deleteAt，记录删除的时间
})