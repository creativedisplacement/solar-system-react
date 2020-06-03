import React from 'react';
import Badge from 'react-bootstrap/Badge';

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

export default QuickFactsRow;
