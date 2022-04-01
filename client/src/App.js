import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getEvents } from './actions/events';
import Form from './components/Form/Form';
import Events from './components/Events/Events';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getEvents());
    },
    [dispatch]
  );

  return (
    <Container>
      <h1 className='text-center my-5'>Manage Events</h1>
      <Row>
        <Col lg={8}>
          <Events />
        </Col>
        <Col lg={4}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
