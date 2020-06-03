import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container className='col-12 alert alert-dark footer'>
      <Row>
        <Col xs={12} md={12}>
          <div className='col-12 alert-dark'>
            <footer>
              &copy; Another test example {new Date().getFullYear()}
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
