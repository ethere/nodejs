const { DataTypes } = require('sequelize');
const sequelize = require('./db');

module.exports = sequelize.define('Student',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sex:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    birth:{
        type:DataTypes.DATE,
        allowNull:false
    },
    tel:{
        type:DataTypes.STRING(11),
        allowNull:false
    }
},{
    createdAt:false,
    updatedAt:false,
    paranoid:true
})