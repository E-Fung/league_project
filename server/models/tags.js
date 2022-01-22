('use strict');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      // define association here
      Tags.belongsToMany(models.Champion, { through: 'ChampionTags', as: 'champions', foreignKey: 'champion_id' });
    }
  }
  Tags.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Tags',
      timestamps: false,
    }
  );
  return Tags;
};
