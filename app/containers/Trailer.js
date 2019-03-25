import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import fetchTrailer from '../actions/fetchTrailer';

class Trailer extends Component {
  componentDidMount() {
    this.props.fetchTrailer(this.props.match.params.movieId);
  }

  render() {
    return (
      <h2
        style={{
          marginBottom: '-10px',
          marginTop: '70px',
          marginLeft: '120px',
        }}
      >
        HEY
      </h2>
    );
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
