const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Enemytips = sequelize.define('enemytips', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  tip: {
    type: DataTypes.STRING,
  },
});

module.exports = Enemytips;
