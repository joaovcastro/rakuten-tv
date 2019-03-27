import reducer from './listReducer';
import * as actions from '../actions/fetchLists';

describe('movie list reducer', () => {
  const initialState = {
    error: undefined,
    isFetching: false,
    list: [],
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_LIST_REQUEST', () => {
    const startAction = {
      type: 'FETCH_LIST_REQUEST',
    };
    expect(reducer({}, startAction)).toEqual({ isFetching: true });
  });

  it('should handle FETCH_LIST_SUCCESS', () => {
    const successAction = {
      type: 'FETCH_LIST_SUCCESS',
      list: [{ id: 1 }],
    };
    expect(reducer({}, successAction)).toEqual({
      isFetching: false,
      list: [
        {
          id: 1,
        },
      ],
    });
  });

  it('should handle FETCH_LIST_FAILURE', () => {
    const failAction = {
      type: 'FETCH_LIST_FAILURE',
      error: '404',
    };
    expect(reducer({}, failAction)).toEqual({
      error: '404',
      isFetching: false,
    });
  });
});
