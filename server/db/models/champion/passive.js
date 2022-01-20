const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Passive = sequelize.define('passive', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Passive;
