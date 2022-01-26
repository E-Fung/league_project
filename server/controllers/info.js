const Info = require('../models').Info;

module.exports = {
  getByChampion(req, res) {
    return Info.findAll({
      where: {
        champion_id: req.body.champion_id,
      },
    })
      .then((tips) => {
        if (!tips) {
          return res.status(404).send({
            message: 'Info Not Found',
          });
        }
        return res.status(200).send(tips);
      })
      .catch((error) => res.status(400).send(error));
  },
};
