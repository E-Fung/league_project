const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 6,
    },
    get() {
      return () => this.getDataValue('password');
    },
  },
});

User.prototype.correctPassword = async (password) => {
  return await bcrypt.compare(password, this.password, function (err, res) {
    if (err) {
      // handle error
    }
  });
};

const setSaltAndPassword = async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password(), 10);
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});

module.exports = User;
