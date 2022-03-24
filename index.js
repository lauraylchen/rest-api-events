const express = require('express');
const app = express();
const PORT = 8080;

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
app.get('/events', (req, res) => {
  res.send(events)
});

// Create an event
// app.post();

app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
);
