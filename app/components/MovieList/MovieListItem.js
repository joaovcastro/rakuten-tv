import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 7px;
`;

const MovieListItem = elem => {
  const { item, onClick } = elem;
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="grid" onClick={onClick}>
        <img
          className="movie-poster"
          src={item.images.artwork}
          width="225px"
          height="310px"
        />
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              color: 'yellow',
              paddingRight: '7.5px',
              textDecoration: 'none',
            }}
          >
            <Icon icon={faStar} />
            {item.highlighted_score.score}
          </span>
          <span
            style={{
              color: 'gray',
              paddingLeft: '7.5px',
              textDecoration: 'none',
            }}
          >
            <Icon icon={faUser} />
            {item.highlighted_score.formatted_amount_of_votes}
          </span>
        </div>
      </div>
    </Link>
  );
};

MovieListItem.propTypes = {
  elem: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape.isRequired,
  }),
};

export default MovieListItem;
