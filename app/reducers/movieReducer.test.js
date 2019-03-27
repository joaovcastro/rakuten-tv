import reducer from './movieReducer';
import * as actions from '../actions/fetchLists';
// import getPostMock from '../mocks/getPostMock';

describe('post reducer', () => {
  const initialState = {
    movie: undefined,
    isFetching: false,
    error: undefined,
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MOVIE_REQUEST', () => {
    const startAction = {
      type: 'FETCH_MOVIE_REQUEST',
    };
    expect(reducer({}, startAction)).toEqual({ isFetching: true });
  });

  it('should handle FETCH_MOVIE_SUCCESS', () => {
    const successAction = {
      type: 'FETCH_MOVIE_SUCCESS',
      movie: { id: 1 },
    };
    expect(reducer({}, successAction)).toEqual({
      isFetching: false,
      movie: {
        id: 1,
      },
    });
  });

  it('should handle FETCH_MOVIE_FAILURE', () => {
    const failAction = {
      type: 'FETCH_MOVIE_FAILURE',
      error: '404',
    };
    expect(reducer({}, failAction)).toEqual({
      error: '404',
      isFetching: false,
    });
  });

  // it('should handle UPDATE_POST_SUCCESS', () => {
  //   const updateAction = {
  //     type: UPDATE_POST_SUCCESS,
  //     post: getPostMock.data,
  //   };
  //   expect(reducer({}, updateAction)).toEqual(getPostMock.data);
  // });

  // it('should handle GET_POST_FAIL', () => {
  //   const failAction = {
  //     type: actions.GET_POST_FAIL,
  //     error: { success: false },
  //   };
  //   expect(reducer({}, failAction)).toEqual({ error: { success: false } });
  // });
});
