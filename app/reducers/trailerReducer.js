const initialState = {
  trailer: undefined,
  isFetching: false,
  error: undefined,
};

export default function trailerReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TRAILER_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FETCH_TRAILER_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
      });
    case 'FETCH_TRAILER_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}
