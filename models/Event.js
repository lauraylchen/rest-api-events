const mongoose = require('mongoose');

// Event Schema
const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 32
  },
  description: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true,
    validate: {
      validator: dateValidator,
      message: 'Start Date must be less than End Date.'
    }
  },
});

function dateValidator(value) {
  return this.start_date <= value;
}

module.exports = mongoose.model('Events', eventSchema);
