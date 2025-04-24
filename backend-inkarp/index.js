const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailing=require('./routes/mailing'); // Adjust the path as needed
const nodemailer = require('nodemailer');
const instrumentRoutes = require('./routes/verticals'); // Adjust the path as needed
const subscribeRoute = require('./routes/subscribe');  // Adjust the path as needed
const careersRouter = require('./routes/careers');
const blogRoutes = require('./routes/blogs');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors());
app.use(bodyParser.json()); // Body parser to handle POST requests

// Routes
app.use('/api/verticals', instrumentRoutes);
console.log('Instrument Routes Loaded:', instrumentRoutes);

// Subscribe route
app.use('/api/subscribe', subscribeRoute);
console.log('Subscribe Routes Loaded:', subscribeRoute);

app.use('/api/careers', careersRouter);

app.use('/api/blogs', blogRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  // Start server after successful connection
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
