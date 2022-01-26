const Champion = require('../models').Champion;
const Allytips = require('../models').Allytips;
const Enemytips = require('../models').Enemytips;
const Info = require('../models').Info;
const Passive = require('../models').Passive;
const Spells = require('../models').Spells;
const Stats = require('../models').Stats;
const Tags = require('../models').Tags;

module.exports = {
  add(req, res) {
    let champ, allytip, enemytip, spell;
    return Champion.create(req.body, {
      include: [
        { model: Info, as: 'info' },
        { model: Passive, as: 'passive' },
        { model: Stats, as: 'stats' },
      ],
    })
      .then((data) => {
        champ = data;
        req.body.tags.forEach((tag) => {
          return Tags.findOrCreate({ where: { tag: tag } })
            .then((data) => {
              tag = data[0]; //findOrCreate returns an array, [<Model>,<Boolean>]
              champ.addTags(tag);
            })
            .catch((error) => console.log(error));
        });
      })
      .then(() => {
        req.body.allytips.forEach((tips) => {
          return Allytips.create({ tip: tips })
            .then((data) => {
              allytip = data;
              champ.addAllytips(allytip);
            })
            .catch((error) => console.log(error));
        });
        req.body.enemytips.forEach((tips) => {
          return Enemytips.create({ tip: tips })
            .then((data) => {
              enemytip = data;
              champ.addEnemytips(enemytip);
            })
            .catch((error) => console.log(error));
        });
        req.body.spells.forEach((spells) => {
          return Spells.create(spells)
            .then((data) => {
              spell = data;
              champ.addSpells(spell);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => res.status(400).send(error));
  },
};
