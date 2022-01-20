const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Allytips = sequelize.define('allytips', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  tip: {
    type: DataTypes.STRING,
  },
});

module.exports = Allytips;
