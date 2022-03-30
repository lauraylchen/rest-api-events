const express = require('express');
const router = express.Router();
const {Event, validate} = require('../models/event');

// Display all the events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

// Create an event
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let event = new Event ({
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.start_date,
    end_date: req.body.end_date
  });

  event = await event.save();
  res.send(events);
});

module.exports = router;
