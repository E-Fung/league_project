const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Spells = sequelize.define('spells', {
  id: {
    //good
    type: DataTypes.STRING,
    primaryKey: true,
  },
  cooldownBurn: {
    type: DataTypes.STRING,
  },
  costBurn: {
    type: DataTypes.STRING,
  },
  costType: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  resource: {
    type: DataTypes.STRING,
  },
  tooltip: {
    type: DataTypes.STRING,
  },
});

module.exports = Spells;
