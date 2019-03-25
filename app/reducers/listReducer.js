const initialState = {
  list: [],
  isFetching: false,
  error: undefined,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LIST_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FETCH_LIST_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
      });
    case 'FETCH_LIST_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}
