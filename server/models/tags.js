('use strict');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      // define association here
      Tags.belongsToMany(models.Champion, { through: 'ChampionTags' });
    }
  }
  Tags.init(
    {
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Tags',
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Tags;
};
