const sequelize = require('./db/db.js');
const User = require('./db/models/user');
const Champion = require('./db/models/champion');
const bcrypt = require('bcrypt'); //adds salt too for added
const jwt = require('jsonwebtoken');

// User.hasMany(Champion);
User.belongsToMany(Champion, { through: 'LikedChampions' });
Champion.belongsToMany(User, { through: 'LikedChampions' });

let userId = null;
sequelize
  .sync({ force: true }) //drop the force:true for first time
  .then(async (result) => {
    let hashed_password = await bcrypt.hash('user_password', 10);
    const accessToken = jwt.sign('Erich', process.env.ACCESS_TOKEN_SECRET);
    return User.create({ name: 'Erich', password: hashed_password });
  })
  .then((user) => {
    userId = user.id;
    return user.createChampion({ name: 'Aatrox' });
  })
  .then((champion) => {
    return Champion.findAll({ where: userId });
  })
  .then((champions) => {
    console.log(champions);
  })
  .catch((err) => {
    console.log(err);
  });
