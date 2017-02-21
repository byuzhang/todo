import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Address = (props) => {
  return (
    <div>
      <Row bsClass="row address">
        <Col md={6} mdOffset={3} mdPush={3}>
          Created by <a href="https://byuzhang.github.io/me/" target="_blank">Bingyu Zhang</a>
        </Col>
      </Row>
      <Row bsClass="row address">
        <Col md={6} mdOffset={3} mdPush={3}>
          Powered by <a href="https://github.com/byuzhang/todo/" target="_blank">Todo</a>
        </Col>
      </Row>
    </div>
  )
}

export default Address;
