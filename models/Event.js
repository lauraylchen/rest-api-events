const Joi = require('joi');
const mongoose = require('mongoose');

// Event Schema
const Event = mongoose.model('Event', new mongoose.Schema({
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
}));

function dateValidator(value) {
  return this.start_date <= value;
}

function validateEvent(event) {
  const schema = Joi.object({
    name: Joi.string().max(32).required(),
    description: Joi.string().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().greater(Joi.ref('start_date')).required()
  });

  return schema.validate(event);
}

exports.Event = Event;
exports.validate = validateEvent;
