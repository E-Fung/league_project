'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spells extends Model {
    static associate(models) {
      // define association here
      Spells.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Spells.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      cooldownBurn: {
        type: DataTypes.STRING,
      },
      costBurn: {
        type: DataTypes.STRING,
      },
      costType: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING(2000),
      },
      resource: {
        type: DataTypes.STRING,
      },
      tooltip: {
        type: DataTypes.STRING(2000),
      },
    },
    {
      sequelize,
      modelName: 'Spells',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Spells;
};
