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
    let champ, tag;
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
              tag = data[0];
              champ.addTags(tag);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => res.status(400).send(error));
  },
};
