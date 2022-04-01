import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event/Event';

const Events = () => {
  const events = useSelector((state) => state.events);

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <Col sm={12} md={6}>
            <Event event={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;
