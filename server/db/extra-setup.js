import User from './models/user';
import { Allytips, Champion, Enemytips, Info, Passive, Spells, Stats, Tags } from './models/champion/';

const applyExtraSetup = () => {
  User.belongsToMany(Champion, { through: 'LikedChampions' });
  Champion.belongsToMany(User, { through: 'LikedChampions' });

  Champion.hasMany(Allytips);
  Allytips.belongsTo(User);
  Champion.hasMany(Enemytips);
  Enemytips.belongsTo(User);

  //info
  //passive
  //spells
  //stats
  Champion.hasOne(Info);
  Info.belongsTo(Champion);
  Champion.hasOne(Passive);
  Passive.belongsTo(Champion);
  Champion.hasOne(Spells);
  Spells.belongsTo(Champion);
  Champion.hasOne(Stats);
  Stats.belongsTo(Champion);
  Champion.hasOne(Tags);
  Tags.belongsTo(Champion);

  //tags
  Tags.belongsToMany(Champion, { through: 'ChampionTags' });
  Champion.belongsToMany(Tags, { through: 'ChampionTags' });
};

module.exports = { applyExtraSetup };
