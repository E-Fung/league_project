const express = require('express');
const cors = require('cors');
const Champion = require('../models/champion');
const { sequelize } = require('../models');

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  console.log(`Checking database connection...`);

  try {
    await sequelize.authenticate();
    console.log('Database connection OK!');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error.message);
    process.exit(1);
  }
})();
sequelize.drop();
sequelize.sync({ force: true });

app.post('/champions', async (req, res) => {
  console.log('In Route');
  try {
    await Champion.create(req.body);
  } catch (error) {
    console.error('Unable to create champion', error);
  }
});

app.listen(5000, () => {
  console.log('Champ Server is Running');
});
