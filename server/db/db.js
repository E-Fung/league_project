const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost',
  // logging: false,
});

applyExtraSetup(sequelize);

module.exports = sequelize;
