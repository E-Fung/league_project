const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Info = sequelize.define('info', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  attack: {
    type: DataTypes.STRING,
  },
  defense: {
    type: DataTypes.STRING,
  },
  difficulty: {
    type: DataTypes.STRING,
  },
  magic: {
    type: DataTypes.STRING,
  },
});

module.exports = Info;
