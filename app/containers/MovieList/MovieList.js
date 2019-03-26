import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import fetchLists from '../../actions/fetchLists';
import MovieListItem from '../../components/MovieList';
import Carousel from '../../components/Carousel/Carousel';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchLists(this.props.list);
  }

  render() {
    return (
      <LazyLoad height={400}>
        <h2
          style={{
            marginBottom: '-10px',
            marginTop: '70px',
            marginLeft: '120px',
          }}
        >
          {this.props.list.name}
        </h2>
        <Carousel>
          {this.props.list.contents &&
            this.props.list.contents.data.map(elem => (
              <MovieListItem
                className="slide"
                key={elem.numerical_id}
                item={elem}
              />
            ))}
        </Carousel>
      </LazyLoad>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLists: function(listId) {
      dispatch(fetchLists(listId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
