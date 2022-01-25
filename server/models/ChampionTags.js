'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChampionTags extends Model {}
  ChampionTags.init(
    {},
    {
      sequelize,
      timestamps: false,
    }
  );
  return ChampionTags;
};
