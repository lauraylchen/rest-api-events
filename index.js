const express = require('express');
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

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

// Homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Display all the events
app.get('/api/events', (req, res) => {
  res.send(events)
});

// Create an event
app.post('/api/events', (req, res) => {
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

app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
);
