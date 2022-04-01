import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useDispatch } from 'react-redux';

// Style from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Style for DateTime Picker
import "@syncfusion/ej2-base/styles/bootstrap5.css";
import "@syncfusion/ej2-buttons/styles/bootstrap5.css";
import "@syncfusion/ej2-inputs/styles/bootstrap5.css";
import "@syncfusion/ej2-popups/styles/bootstrap5.css";
import "@syncfusion/ej2-react-calendars/styles/bootstrap5.css";

import { createEvent } from '../../actions/events';

const initialState = {
  name: '',
  description: '',
  start_date: '',
  end_date: ''
}

const EventForm = () => {
  const [eventData, setEventData] = useState(initialState);
  const [eventErrors, setEventErrors] = useState({});

  const dispatch = useDispatch();

  // Validations for input of form
  const validate = (values) => {
    const errors = {}
    if(!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 32) {
      errors.name = "Name must have 32 or less characters";
    }
    if(!values.description) {
      errors.description = "Description is required";
    }
    if(!values.start_date) {
      errors.start_date = "Start Date is required";
    }
    if(!values.end_date) {
      errors.end_date = "End Date is required";
    } else if (values.end_date <= values.start_date) {
      errors.end_date = "End Date must be greater than Start Date";
    }
    else {
      // When event is added in DB
      errors.valid = "Successfully added event!"
    }

    return errors;
  }

  // Clear out input from form
  const clear = () => {
    setEventData(initialState);
    setEventErrors(initialState);
  }

  // Replaced eventData with the input value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  }

  // Submiting form
  const handleSubmit = (e) => {
    e.preventDefault();

    setEventErrors(validate(eventData));
    dispatch(createEvent(eventData));
  }

  return (
  <Form className='rounded border p-3' onSubmit={handleSubmit}>
    <p className='text-success my-1 text-center'>{eventErrors.valid}</p>
    <h2 className='text-center'>Add an Event</h2>

    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        value={eventData.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <Form.Text className="text-muted">
        Maximum of 32 characters
      </Form.Text>
      <p className='text-danger mt-1'>{eventErrors.name}</p>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        name="description"
        value={eventData.description}
        placeholder="Description"
        style={{ height: 100 }}
        onChange={handleChange}
      />
      <p className='text-danger mt-1'>{eventErrors.description}</p>
    </Form.Group>

    <div className='mb-3'>
      <Form.Label>Start Date</Form.Label>
      <DateTimePickerComponent
        name="start_date"
        value={eventData.start_date}
        placeholder="mm-dd-yyyy 00:00"
        onChange={handleChange}
      >
      </DateTimePickerComponent>
      <p className='text-danger mt-1'>{eventErrors.start_date}</p>
    </div>

    <div className='mb-3'>
      <Form.Label>End Date</Form.Label>
      <DateTimePickerComponent
        name="end_date"
        value={eventData.end_date}
        placeholder="mm-dd-yyyy 00:00"
        onChange={handleChange}
      >
      </DateTimePickerComponent>
      <p className='text-danger mt-1'>{eventErrors.end_date}</p>
    </div>

    <div className='d-grid gap-2'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="outline-primary" onClick={clear}>
        Clear
      </Button>
    </div>
  </Form>
  );
}

export default EventForm;
