const sequelize = require('./db');
const { DataTypes } = require('sequelize');

module.exports =  sequelize.define('User',{
    account:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});