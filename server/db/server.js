const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.send({ user: 'penis' });
});

//next runs the next piece of middleware, the middleware are the app.get stuff, the order of their definition determins its run order
function logger(req, res, next) {
  console.log('Log');
  next();
}

//ways to run middleware

app.listen(3000, () => {
  console.log('Server is Running');
});
