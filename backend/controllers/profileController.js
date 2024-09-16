const Profile = require('../models/Profile'); // Sequelize model

const updateProfile = async (req, res) => {
  try {
    const { role } = req.params; // 'role' is a unique identifier for the profile
    const profileData = req.body;

    //  'role' is a unique field in your database schema
    const [updatedRows] = await Profile.update(profileData, {
      where: { role },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Profile not found or no changes detected' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  updateProfile,
};

