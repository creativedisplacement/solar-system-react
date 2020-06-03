import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Planet from '../Planet/Planet';
import PropTypes from 'prop-types';
import './planets.css';

const Planets = (props) => {
  const planets = props.planets;
  return (
    <CardDeck>
      {planets.map((planet) => (
        <Planet key={planet.id} planet={planet} />
      ))}
    </CardDeck>
  );
};

Planets.propTypes = { planets: PropTypes.array.isRequired };
export default Planets;
