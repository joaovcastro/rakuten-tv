import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ name, icon }) => (
  <div className="genre-container" >
    <div className="genre">
      <img src={icon} />
    </div>
    <p> {name} </p>
  </div>
);

Genre.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default Genre;
