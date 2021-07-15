const Sequelize = require('sequelize');
const connection = new Sequelize('i4i_cadastro', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    logging: false
})

module.exports = connection;