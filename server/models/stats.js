'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    static associate(models) {
      // define association here
      Stats.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Stats.init(
    {
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
    },
    {
      sequelize,
      modelName: 'Stats',
      timestamps: false,
    }
  );
  return Stats;
};
