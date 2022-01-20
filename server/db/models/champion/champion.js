const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Champion = sequelize.define('champion', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  lore: {
    type: DataTypes.STRING(1002),
  },
  blurb: {
    type: DataTypes.STRING(1000),
  },
  partype: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
});

module.exports = Champion;
