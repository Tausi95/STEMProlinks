const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure this file exports your Sequelize instance

class Profile extends Model {}

Profile.init({
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Assuming 'role' is unique
  },
  learningGoals: DataTypes.STRING,
  preferredMentor: DataTypes.STRING,
  availability: DataTypes.STRING,
  bio: DataTypes.STRING,
  eventName: DataTypes.STRING,
  eventDate: DataTypes.DATE,
  eventDescription: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Profile',
});

module.exports = Profile;

