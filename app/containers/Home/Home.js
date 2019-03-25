import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList';
import WelcomeBanner from '../../components/WelcomeBanner';

const movieLists = [
  'populares-en-taquilla',
  'estrenos-para-toda-la-familia',
  'estrenos-imprescindibles-en-taquilla',
  'estrenos-espanoles',
  'si-te-perdiste',
  'especial-x-men',
  'nuestras-preferidas-de-la-semana',
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieLists,
    };
  }
  componentDidMount() {
    this.props.clearProps();
  }

  render() {
    return (
      <Fragment>
        <WelcomeBanner />
        {this.state.movieLists.map(list => {
          return <MovieList key={list} list={list} />;
        })}
      </Fragment>
    );
  }
}

function mapStateToProps(props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    clearProps: function() {
      dispatch({
        type: 'FETCH_MOVIE_SUCCESS',
        movie: undefined,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
