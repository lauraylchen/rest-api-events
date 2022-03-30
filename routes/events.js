const express = require('express');
const router = express.Router();

// Testing events
const events = [
  {
    id: 1,
    name: 'event1',
    description: 'This event is a test.',
    start_date: '2022-03-25 08:11:51',
    end_date: '2022-03-25 14:11:51'
  },
  {
    id: 2,
    name: 'event2',
    description: 'This event is a test.',
    start_date: '2022-03-25 08:11:51',
    end_date: '2022-03-26 14:11:51'
  }
];

// Display all the events
router.get('/', (req, res) => {
  res.send(events)
});

// Create an event
router.post('/', (req, res) => {
  const event = {
    id: events.length + 1,
    name: req.body.name,
    description: req.body.description,
    start_date: req.body.start_date,
    end_date: req.body.end_date
  };

  events.push(event);
  res.send(events);
});

module.exports = router;
