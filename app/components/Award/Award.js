import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ name, category, result }) => (
  <div className="flex center line-height-5">
    <div className="award__laurea--left" />
    <div className="center">
      <p className="bold">{category}</p>
      <p className="bold golden">{name}</p>
      <p>{result}</p>
    </div>
    <div className="award__laurea--right" />
  </div>
);

Award.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  result: PropTypes.string,
};

export default Award;
