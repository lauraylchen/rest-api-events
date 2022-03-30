const mongoose = require('mongoose');

// Event Schema
const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  start_date: Date,
  end_date: Date
});

module.exports = mongoose.model('Events', eventSchema);
