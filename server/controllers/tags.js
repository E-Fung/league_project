const Tags = require('../models').Tags;

module.exports = {
  add(req, res) {
    return Tags.findOne({ where: { tag: '' } });
  },
};
