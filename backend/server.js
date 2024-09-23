const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db'); // Ensure correct import
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mentorshipRoutes = require('./routes/mentorshipRoutes');
const eventRoutes = require('./routes/eventRoutes');
const networkRoutes = require('./routes/networkRoutes');
const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config(); // Load environment variables from .env file

// Connect to MySQL Database using Sequelize
connectDB(); // Ensure connectDB handles Sequelize initialization

const app = express();
app.use(express.json()); // Parse incoming JSON requests

// Define health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: "API is running properly." });
});

// Define RESTful routes
app.use('/api/users', userRoutes);     // User routes
app.use('/api/profile', profileRoutes); // Profile routes
app.use('/api/mentorship', mentorshipRoutes); // Mentorship routes
app.use('/api/events', eventRoutes); // Events routes
app.use('/api/network', networkRoutes); // Network routes
app.use('/api/auth', authRoutes); // Authentication routes

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

