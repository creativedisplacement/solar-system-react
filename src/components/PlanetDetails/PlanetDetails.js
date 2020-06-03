import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import QuickFactsRow from '../QuickFactsRow/QuickFactsRow';

const PlanetDetails = (props) => {
  const planet = props.planet;
  const show = props.show;
  const handleClose = props.handleClose;
  const spacing = ' ';

  const numberWithCommas = (string) => {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formatQuickFacts = (string, units) => {
    return spacing + string + spacing + units;
  };

  const formatDescription = (string) =>
    string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        <p>{text}</p>
      </React.Fragment>
    ));

  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>{planet.name}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <Image src={planet.imageUrl} alt={planet.name} fluid rounded />
              <Row>
                <Col xs={12} md={12}>
                  <Alert variant='secondary'>
                    <Alert.Heading>
                      <h2>Quick facts</h2>
                    </Alert.Heading>
                    <QuickFactsRow
                      label='Day'
                      description={formatQuickFacts(
                        planet.rotationperiod,
                        'hours'
                      )}
                    />
                    <QuickFactsRow
                      label='Year'
                      description={formatQuickFacts(
                        planet.period,
                        'Earth years'
                      )}
                    />
                    <QuickFactsRow
                      label='Planet type'
                      description={formatQuickFacts(planet.type, '')}
                    />
                    <QuickFactsRow
                      label='Radius'
                      description={formatQuickFacts(
                        numberWithCommas(planet.radius),
                        'kilometers'
                      )}
                    />
                    <QuickFactsRow
                      label='Number of moons'
                      description={formatQuickFacts(planet.moons, '')}
                    />
                  </Alert>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={7}>
              <p>{planet.introduction}</p>
              {formatDescription(planet.description)}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PlanetDetails.propTypes = {
  planet: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default PlanetDetails;
