'use strict';
const { Model } = require('sequelize');

// sequelize.sync({alter:true}).then(()=>{
//   return Allytips.findOne({where:{tips:allytips}})
// }).then((data)=>{
//   tip = data;
//   return Champion.findOne({where:{}})
// })

module.exports = (sequelize, DataTypes) => {
  class Allytips extends Model {
    static associate(models) {
      // define association here
      Allytips.belongsTo(models.Champion, { foreignKey: 'champion_id' });
    }
  }
  Allytips.init(
    {
      tip: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Allytips',
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Allytips;
};
