'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Passive extends Model {
    static associate(models) {
      // define association here
      Passive.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Passive.init(
    {
      description: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Passive',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Passive;
};
