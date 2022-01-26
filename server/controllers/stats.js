const Stats = require('../models').Stats;

module.exports = {
  getByChampion(req, res) {
    return Stats.findAll({
      where: {
        champion_id: req.body.champion_id,
      },
    })
      .then((tips) => {
        if (!tips) {
          return res.status(404).send({
            message: 'Stats Not Found',
          });
        }
        return res.status(200).send(tips);
      })
      .catch((error) => res.status(400).send(error));
  },
};
