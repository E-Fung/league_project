'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Info extends Model {
    static associate(models) {
      // define association here
      Info.belongsTo(models.Champion, { foreignKey: 'champion_id', as: 'champion' });
    }
  }
  Info.init(
    {
      attack: {
        type: DataTypes.STRING,
      },
      defense: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.STRING,
      },
      magic: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Info',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Info;
};
