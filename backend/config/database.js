const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'xand', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
