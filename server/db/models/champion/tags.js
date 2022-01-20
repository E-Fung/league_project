const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Tags = sequelize.define('tags', {
  //good
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tags;
