'use strict';
module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    connectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});

  // Relationships
  Network.associate = function(models) {
    // Network is the linking table between Profile and Profile
    Network.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      as: 'profile',
    });

    Network.belongsTo(models.Profile, {
      foreignKey: 'connectionId',
      as: 'connection',
    });
  };

  return Network;
};

