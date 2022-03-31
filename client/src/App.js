import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form/Form';

const App = () => {
  return (
    <Container>
      <h1 className='text-center my-3'>Manage Events</h1>
      <Row>
        <Col sm={8}>
          <h2>Events</h2>
        </Col>
        <Col sm={4}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
