const Profile = require('../models/Profile'); // Import Sequelize Profile model

// Fetch all profiles with their connections
const getProfilesWithConnections = async (req, res) => {
  try {
    // Find all profiles and include their connections from the Profile model itself
    const profiles = await Profile.findAll({
      include: [{
        model: Profile,
        as: 'connections' // Assumes 'connections' is the alias set up in the model relationships
      }]
    });

    // Return the fetched profiles as a JSON response
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update profile by role (unique identifier)
const updateProfile = async (req, res) => {
  try {
    const { role } = req.params; // 'role' is used to identify the profile
    const profileData = req.body; // Contains the updated profile information

    // Update the profile based on the role
    const [updatedRows] = await Profile.update(profileData, {
      where: { role }, // Ensure 'role' is unique in your schema
    });

    // If no rows were updated, it means the profile wasn't found or no changes were made
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Profile not found or no changes detected' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    // Catch and return any server error
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getProfilesWithConnections,
  updateProfile
};

