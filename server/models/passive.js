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
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
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
      timestamps: false,
    }
  );
  return Passive;
};
