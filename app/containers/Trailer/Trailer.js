import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import fetchTrailer from '../../actions/fetchTrailer';

const TrailerContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: red;
  background: linear-gradient(
    to bottom,
    #171717 50%,
    rgba(0, 0, 0, 0.15) 60%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.7) 80%,
    #000000 100%
  );
`;

class Trailer extends Component {
  componentDidMount() {
    this.props.fetchTrailer(this.props.match.params.movieId);
  }

  render() {
    return <TrailerContainer />;
  }
}

function mapStateToProps() {}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrailer: function(movieId) {
      dispatch(fetchTrailer(movieId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trailer);
