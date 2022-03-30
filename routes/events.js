const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Display all the events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create an event
router.post('/', async (req, res) => {
  const event = new Event ({
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.start_date,
    end_date: req.body.end_date
  });

  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
