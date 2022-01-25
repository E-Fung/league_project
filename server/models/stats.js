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
      armor: {
        type: DataTypes.FLOAT,
      },
      armorperlevel: {
        type: DataTypes.FLOAT,
      },
      attackdamage: {
        type: DataTypes.FLOAT,
      },
      attackdamageperlevel: {
        type: DataTypes.FLOAT,
      },
      attackrange: {
        type: DataTypes.FLOAT,
      },
      attackspeed: {
        type: DataTypes.FLOAT,
      },
      attackspeedperlevel: {
        type: DataTypes.FLOAT,
      },
      crit: {
        type: DataTypes.FLOAT,
      },
      critperlevel: {
        type: DataTypes.FLOAT,
      },
      hp: {
        type: DataTypes.FLOAT,
      },
      hpperlevel: {
        type: DataTypes.FLOAT,
      },
      hpregen: {
        type: DataTypes.FLOAT,
      },
      hpregenperlevel: {
        type: DataTypes.FLOAT,
      },
      movespeed: {
        type: DataTypes.FLOAT,
      },
      mp: {
        type: DataTypes.FLOAT,
      },
      mpperlevel: {
        type: DataTypes.FLOAT,
      },
      mpregen: {
        type: DataTypes.FLOAT,
      },
      mpregenperlevel: {
        type: DataTypes.FLOAT,
      },
      spellblock: {
        type: DataTypes.FLOAT,
      },
      spellblockperlevel: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: 'Stats',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Stats;
};
