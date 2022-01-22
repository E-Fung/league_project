'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Allytips extends Model {
    static associate(models) {
      // define association here
      Allytips.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Allytips.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      tip: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Allytips',
      timestamps: false,
    }
  );
  return Allytips;
};
