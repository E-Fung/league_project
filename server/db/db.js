const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost',
  logging: false,
});

module.exports = sequelize;

// app.post('/league/user', async (req, res) => {
//   res.json('Non-unique Username');
//   try {
//     const eric = await User.create({ name: 'Eric', password: '1' });
//   } catch (error) {
//     console.error('Unable to create user', error);
//   }
// });

// (async () => {
//   try {
//     await sequelize.authenticate();
//     const eric = await User.create({ name: 'Ericc', password: '1' });
//     // const incrementResult = await eric.increment('password', { by: 2 });
//     // console.log('jane', eric.password.toJson());
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// const eric = await User.create({ name: 'Eric', password: '1' });

// //updating obj
// eric.name = 'Ero';
// await eric.save();

// eric.set({ name: 'Ero', password: '2' });
// await eric.save();

// //deleting
// await eric.destroy();

// //reverting
// const jane = await User.create({ name: 'Jane' });
// console.log(jane.name); // "Jane"
// jane.name = 'Ada';
// // the name is still "Jane" in the database
// await jane.reload();
// console.log(jane.name); // "Jane"

// (async () => {
//   try {

//     // eric.password = '2';
//     // console.log(eric.password);
//     // const incrementResult = await eric.increment('password', { by: 2 });
//     // console.log('jane', eric.password.toJson());
//   } catch (error) {
//     // console.log('error');
//     console.error(error);
//   }
// })();

// // incrementing
// const jane = await User.create({ name: 'Jane', password: 100 });
// const incrementResult = await jane.increment('password', { by: 2 });
// Note: to increment by 1 you can omit the `by` option and just do `user.increment('age')`
// console.log(jane.password);
