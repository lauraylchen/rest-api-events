import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
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

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createEvent(eventData));
  }

  return (
  <Form className='rounded border p-3' onSubmit={handleSubmit}>
    <h2 className='text-center'>Add an Event</h2>

    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        value={eventData.name}
        placeholder="Name"
        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
      />
      <Form.Text className="text-muted">
        Maximum of 32 characters
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        name="description"
        value={eventData.description}
        placeholder="Description"
        style={{ height: 100 }}
        onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
      />
    </Form.Group>

    <div className='mb-3'>
      <Form.Label>Start Date</Form.Label>
      <DateTimePickerComponent
        name="start_date"
        value={eventData.start_date}
        placeholder="mm-dd-yyyy 00:00"
        onChange={(e) => setEventData({ ...eventData, start_date: e.target.value })}
      >
      </DateTimePickerComponent>
    </div>

    <div className='mb-3'>
      <Form.Label>End Date</Form.Label>
      <DateTimePickerComponent
        name="end_date"
        value={eventData.end_date}
        placeholder="mm-dd-yyyy 00:00"
        onChange={(e) => setEventData({ ...eventData, end_date: e.target.value })}
      >
      </DateTimePickerComponent>
    </div>

    <div className='d-grid gap-2'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>
  );
}

export default EventForm;
