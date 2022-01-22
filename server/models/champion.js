'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Champion extends Model {
    static associate(models) {
      Champion.belongsToMany(models.User, { through: 'LikedChampions', as: 'users', foreignKey: 'user_id' });
      Champion.hasMany(models.Allytips, { foreignKey: 'allytips_id', as: 'allytips' });
      Champion.hasMany(models.Enemytips, { foreignKey: 'enemytips_id', as: 'enemytips' });
      Champion.hasOne(models.Info, { foreignKey: 'info_id', as: 'info' });
      Champion.hasOne(models.Passive, { foreignKey: 'passive_id', as: 'passive' });
      Champion.hasMany(models.Spells, { foreignKey: 'spells_id', as: 'spells' });
      Champion.hasOne(models.Stats, { foreignKey: 'stats_id', as: 'stats' });
      Champion.belongsToMany(models.Tags, { through: 'ChampionTags', as: 'tags', foreignKey: 'tag_id' });
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
    { sequelize, modelName: 'Champion', timestamps: false }
  );
  return Champion;
};
