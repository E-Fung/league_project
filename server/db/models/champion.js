const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Champion = sequelize.define('champion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Champion;
