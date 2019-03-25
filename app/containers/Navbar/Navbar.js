import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 100px;
  position: fixed;
  color: #fff;
  height: 65px;
  text-align: center;
  background: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  margin-top: -70px;
  z-index: 1000;
`;

const Navbar = props => (
  <Nav>
    <div className="col-10">
      <Link to={'/'}>
        <img
          src="https://dx35vtwkllhj9.cloudfront.net/images/regions/gb/home_ent/rakutentv-white.png"
          width="150"
        />
      </Link>
    </div>
    <div className="col-50" style={{ textAlign: 'left', paddingLeft: '30px' }}>
      <h2> {props.movie && props.movie.title} </h2>
    </div>
  </Nav>
);

function mergeProps(props) {
  return props.movie;
}

Navbar.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  movie: undefined,
};

export default connect(mergeProps)(Navbar);
