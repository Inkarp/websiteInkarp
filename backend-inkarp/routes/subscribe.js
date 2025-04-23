// routes/subscribe.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const newUser = new User({ email });
    await newUser.save();
    res.status(200).json({ message: 'Subscription successful', email });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router; 
