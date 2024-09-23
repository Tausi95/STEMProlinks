'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Example association: One Mentor can host many Events
      Mentor.hasMany(models.Event, { 
        foreignKey: 'mentorId',  // Add a mentorId in the Event model
        as: 'events' // Alias for the association
      });
    }
  }

  // Initialize the Mentor model with fields
  Mentor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // name is required
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false, // field is required, e.g., math, physics, etc.
    },
    experience: {
      type: DataTypes.TEXT, // Descriptive text about the mentor's experience
      allowNull: true, // experience is optional
    },
  }, {
    sequelize,
    modelName: 'Mentor', // Name of the model
  });

  return Mentor;
};

