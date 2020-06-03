import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

const QuickFactsRow = (props) => {
  const label = props.label;
  const description = props.description;
  return (
    <h3>
      <Badge pill variant='secondary'>
        {label}
      </Badge>
      {description}
    </h3>
  );
};

QuickFactsRow.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default QuickFactsRow;
