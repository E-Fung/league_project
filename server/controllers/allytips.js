const Allytips = require('../models').Allytips;

module.exports = {
  getByChampion(req, res) {
    return Allytips.findAll({
      attributes: ['tip'],
      where: {
        champion_id: req.body.champion_id,
      },
    })
      .then((tips) => {
        if (!tips) {
          return res.status(404).send({
            message: 'Ally Tips Not Found',
          });
        }
        return res.status(200).send(tips);
      })
      .catch((error) => res.status(400).send(error));
  },
};
