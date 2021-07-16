// Model de Usuario
const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    },name: {
        type: Sequelize.STRING,
        allowNull: true
    },address: {
        type: Sequelize.STRING,
        allowNull: true
    },address2: {
        type: Sequelize.STRING,
        allowNull: true
    },country: {
        type: Sequelize.STRING,
        allowNull: true
    },state: {
        type: Sequelize.STRING,
        allowNull: true
    },zip: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

// Cria tabela caso nao tenha sido criada ainda
User.sync({force: false});

module.exports = User