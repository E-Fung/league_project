'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Champion extends Model {
    static associate(models) {
      Champion.belongsToMany(models.User, { through: 'LikedChampions', as: 'users', foreignKey: 'champion_id' });
      Champion.hasMany(models.Allytips, { foreignKey: 'champion_id' });
      Champion.hasMany(models.Enemytips, { foreignKey: 'champion_id', as: 'enemytips' });
      Champion.hasOne(models.Info, { foreignKey: 'champion_id', as: 'info' });
      Champion.hasOne(models.Passive, { foreignKey: 'champion_id', as: 'passive' });
      Champion.hasMany(models.Spells, { foreignKey: 'champion_id', as: 'spells' });
      Champion.hasOne(models.Stats, { foreignKey: 'champion_id', as: 'stats' });
      Champion.belongsToMany(models.Tags, { through: 'ChampionTags', foreignKey: 'champion_id' });
    }
  }
  Champion.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      lore: {
        type: DataTypes.STRING(1000),
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
    },
    {
      sequelize,
      modelName: 'Champion',
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Champion;
};
