'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enemytips extends Model {
    static associate(models) {
      // define association here
      Enemytips.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Enemytips.init(
    {
      tip: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Enemytips',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Enemytips;
};
