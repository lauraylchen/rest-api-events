import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import './style.css';

const Event = ({ event }) => {
  return (
    <Card style={{ height: '14rem' }} className="mb-4 border-primary">
      <Card.Body>
        <Card.Title className='text-primary text-capitalize'>{event.name}</Card.Title>
        <Card.Text className="m-0 text-muted italic">
          From: {moment(event.start_date).format('MMMM Do YYYY, h:mm a')}
        </Card.Text>
        <Card.Text className="text-muted italic">
          To: {moment(event.end_date).format('MMMM Do YYYY, h:mm a')}
        </Card.Text>
        <hr className='text-primary'/>
        <Card.Text className='truncate'>{event.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Event;
