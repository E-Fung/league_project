const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Stats = sequelize.define('stats', {
  //good
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  armor: {
    type: DataTypes.INTEGER,
  },
  armorperlevel: {
    type: DataTypes.INTEGER,
  },
  attackdamage: {
    type: DataTypes.INTEGER,
  },
  attackdamageperlevel: {
    type: DataTypes.INTEGER,
  },
  attackrange: {
    type: DataTypes.INTEGER,
  },
  attackspeed: {
    type: DataTypes.INTEGER,
  },
  attackspeedperlevel: {
    type: DataTypes.INTEGER,
  },
  crit: {
    type: DataTypes.INTEGER,
  },
  critperlevel: {
    type: DataTypes.INTEGER,
  },
  hp: {
    type: DataTypes.INTEGER,
  },
  hpperlevel: {
    type: DataTypes.INTEGER,
  },
  hpregen: {
    type: DataTypes.INTEGER,
  },
  hpregenperlevel: {
    type: DataTypes.INTEGER,
  },
  movespeed: {
    type: DataTypes.INTEGER,
  },
  mp: {
    type: DataTypes.INTEGER,
  },
  mpperlevel: {
    type: DataTypes.INTEGER,
  },
  mpregen: {
    type: DataTypes.INTEGER,
  },
  mpregenperlevel: {
    type: DataTypes.INTEGER,
  },
  spellblock: {
    type: DataTypes.INTEGER,
  },
  spellblockperlevel: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Stats;
