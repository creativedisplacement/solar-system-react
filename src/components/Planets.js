import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Planet from './Planet';
import PropTypes from 'prop-types';

function Planets() {
  return (
    <CardDeck>
      <Planet />
      <Planet />
      <Planet />
      <Planet />
    </CardDeck>
  );
}

export default Planets;
