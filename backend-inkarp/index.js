const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const instrumentRoutes = require('./routes/verticals'); // Adjust the path as needed
const subscribeRoute = require('./routes/subscribe');  // Adjust the path as needed

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

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Can be changed to another service like SendGrid or Mailgun
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for email credentials
    pass: process.env.EMAIL_PASS, // Use environment variables for email credentials
  },
});

// Subscription Route (for handling subscribe requests)
app.post('/api', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender email
    to: 'sharath@inkarp.co.in',  // Email where you want to receive the subscription
    subject: 'New Subscription',
    text: `New subscriber: ${email}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Subscription successful', info });
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  // Start server after successful connection
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
