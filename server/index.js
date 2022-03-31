const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
require('dotenv/config');

// Import Routes
const eventsRoute = require('./routes/events');


// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/events', eventsRoute);

// Homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Connect to DB
mongoose.connect( process.env.DB_CONNECTION )
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
