const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const instrumentRoutes = require('./routes/verticals');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Routes
app.use('/api/verticals', instrumentRoutes);

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}).catch((err) => console.error('MongoDB connection error:', err));
