'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    // Profile attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Additional fields
    fieldOfInterest: {
      type: DataTypes.STRING,
      allowNull: false, // e.g., 'Math', 'Physics', 'Engineering', etc.
    },
    role: {
      type: DataTypes.ENUM('student', 'mentor', 'event_creator'),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});

  // Relationships
  Profile.associate = function(models) {
    // A Profile belongs to a single User
    Profile.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });

    // A Profile can be part of many networks
    Profile.belongsToMany(models.Profile, {
      through: 'Network',
      as: 'connections',
      foreignKey: 'profileId',
      otherKey: 'connectionId',
    });
  };

  return Profile;
};

