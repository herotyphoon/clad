const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'clad',
  'clad',
  'Aakarsh123p',
  {
    host: '192.168.29.212',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;


