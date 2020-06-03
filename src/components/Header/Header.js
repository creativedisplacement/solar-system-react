import React from 'react';
import logo from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return (
    <header>
      <Container className='col-12'>
        <Jumbotron fluid>
          <Container>
            <h1>Planets of the Solar System</h1>
            <p>
              <img src={logo} className='App-logo' alt='logo' />
              Some facts and figures on all the planets in the solar system in a
              React app.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </header>
  );
};

export default Header;
