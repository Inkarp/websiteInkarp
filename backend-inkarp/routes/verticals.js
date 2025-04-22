const express = require('express');
const router = express.Router();
const Instrument = require('../models/Verticals');

// Create
router.post('/', async (req, res) => {
  try {
    const newInstrument = new Instrument(req.body);
    const savedInstrument = await newInstrument.save();
    res.status(201).json(savedInstrument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All
router.get('/', async (req, res) => {
  try {
    const instruments = await Instrument.find();
    res.json(instruments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedInstrument = await Instrument.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedInstrument);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Instrument.findByIdAndDelete(req.params.id);
    res.json({ message: 'Instrument deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
