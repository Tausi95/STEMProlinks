import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [role, setRole] = useState('student'); // Default role
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch profile data based on role
    setLoading(true);
    axios.get(`http://localhost:5000/api/profile/${role}`)
      .then(response => {
        setProfileData(response.data);
        setFormData(response.data); // Initialize form data with fetched profile data
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching profile data. Please try again later.');
        setLoading(false);
        console.error('Error fetching profile data:', error);
      });
  }, [role]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/profile/${role}`, formData)
      .then(response => {
        alert('Profile updated successfully');
        setProfileData(response.data);
      })
      .catch(error => {
        setError('Error updating profile. Please try again later.');
        console.error('Error updating profile:', error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <p>Manage your profile information and settings based on your role.</p>

      {/* Role selection */}
      <div className="role-selection">
        <button onClick={() => handleRoleChange('student')}>Student</button>
        <button onClick={() => handleRoleChange('mentor')}>Mentor</button>
        <button onClick={() => handleRoleChange('event_creator')}>Event Creator</button>
      </div>

      {/* Conditional rendering based on role */}
      {role === 'student' && (
        <div className="profile-section">
          <h2>Student Profile</h2>
          <p>Update your learning goals, track your progress, and connect with mentors.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Learning Goals:
              <input
                type="text"
                name="learningGoals"
                value={formData.learningGoals || ''}
                onChange={handleChange}
                placeholder="Enter your learning goals"
                required
              />
            </label>
            <label>
              Preferred Mentor:
              <input
                type="text"
                name="preferredMentor"
                value={formData.preferredMentor || ''}
                onChange={handleChange}
                placeholder="Choose a mentor"
                required
              />
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}

      {role === 'mentor' && (
        <div className="profile-section">
          <h2>Mentor Profile</h2>
          <p>Manage your availability, track student progress, and update your bio.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Availability:
              <input
                type="text"
                name="availability"
                value={formData.availability || ''}
                onChange={handleChange}
                placeholder="Enter available times"
                required
              />
            </label>
            <label>
              Bio:
              <textarea
                name="bio"
                value={formData.bio || ''}
                onChange={handleChange}
                placeholder="Write a short bio"
                required
              ></textarea>
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}

      {role === 'event_creator' && (
        <div className="profile-section">
          <h2>Event Creator Profile</h2>
          <p>Create and manage events for STEM professionals and students.</p>
          <form onSubmit={handleSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                name="eventName"
                value={formData.eventName || ''}
                onChange={handleChange}
                placeholder="Enter event name"
                required
              />
            </label>
            <label>
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate || ''}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Event Description:
              <textarea
                name="eventDescription"
                value={formData.eventDescription || ''}
                onChange={handleChange}
                placeholder="Describe the event"
                required
              ></textarea>
            </label>
            <button type="submit">Create Event</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;

