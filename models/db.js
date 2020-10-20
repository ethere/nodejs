const {
    Sequelize, Model
} = require('sequelize');

module.exports = new Sequelize('schooldb', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});
