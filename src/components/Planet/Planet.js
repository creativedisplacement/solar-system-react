import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import PlanetDetails from '../PlanetDetails/PlanetDetails';

const Planet = (props) => {
  const planet = props.planet;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow}>
        <Card.Img variant='top' src={planet.imageUrl} />
        <Card.Body>
          <Card.Title>{planet.name}</Card.Title>
          <Card.Text>{planet.introduction}</Card.Text>
        </Card.Body>
      </Card>
      <PlanetDetails planet={planet} show={show} handleClose={handleClose} />
    </>
  );
};

Planet.propTypes = { planet: PropTypes.object.isRequired };
export default Planet;
