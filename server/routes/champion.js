const express = require('express');
const cors = require('cors');
const Champion = require('../db/models/champion/champion');
const sequelize = require('../db/db');

const app = express();
app.use(cors());
app.use(express.json());

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
