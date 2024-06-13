const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the database connection function
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const heapdump = require('heapdump');

dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Example: Capture a heap dump
heapdump.writeSnapshot((err, filename) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Heap dump written to ${filename}`);
  }
});
