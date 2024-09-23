// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Import sequelize instance

const User = sequelize.define('User', {
  // Define columns in the table
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'student',
  },
});

// Export the model
module.exports = User;

