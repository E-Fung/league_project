const Tags = require('../models').Tags;
const Champion = require('../models').Champion;

module.exports = {
  getByChampion(req, res) {
    return Tags.findAll({
      include: [
        {
          model: Champion,
          where: {
            id: req.body.champion_id,
          },
        },
      ],
    })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => res.status(400).send(error));
  },
};
