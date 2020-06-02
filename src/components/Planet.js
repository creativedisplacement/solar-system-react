import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Planet() {
  return (
    <Card>
      <Card.Img
        variant='top'
        src='https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg'
      />
      <Card.Body>
        <Card.Title>Mercury</Card.Title>
        <Card.Text>
          Mercury—the smallest planet in our solar system and closest to the
          Sun—is only slightly larger than Earth's Moon.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Planet;
