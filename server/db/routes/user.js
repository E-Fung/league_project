const express = require('express');
const cors = require('cors');
const User = require('./../models/user');
const sequelize = require('../db');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const { name, password } = req.body;
    await User.create(req.body);
  } catch (error) {
    console.error('Unable to create user', error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (!user) {
      console.log({ error: `No user found for username: ${name}` });
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else if (!user.correctPassword(password)) {
      console.log({ error: 'Wrong username and/or password' });
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else {
      console.log({ error: 'Correct' });
      res.status(401).json({ error: 'Correct' });
    }
  } catch (error) {
    console.error('Unable to create user', error);
  }
});

app.listen(3000, () => {
  console.log('Server is Running');
});
