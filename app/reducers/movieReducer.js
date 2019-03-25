const initialState = {
  movie: undefined,
  isFetching: false,
  error: undefined,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FETCH_MOVIE_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        movie: action.movie,
      });
    case 'FETCH_MOVIE_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}
