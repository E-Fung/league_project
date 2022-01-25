const Allytips = require('../models').Allytips;

module.exports = {
  add(req, res) {
    return Allytips.findOrCreate(req.body)
      .then((allytip) => res.status(201).send(allytip))
      .catch((error) => res.status(400).send(error));
  },
};
