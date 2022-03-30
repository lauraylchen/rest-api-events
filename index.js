const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 8080;
require('dotenv/config');

// Import Routes
const eventsRoute = require('./routes/events');

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('connected to DB')
);

// Event Schema
const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  start_date: Date,
  end_date: Date
});

// Middlewares
app.use(express.json());
app.use('/api/events', eventsRoute);

// ROUTES
// Homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Listening to server
app.listen(
  PORT,
  () => console.log(`It's alive on http://localhost:${PORT}`)
);
