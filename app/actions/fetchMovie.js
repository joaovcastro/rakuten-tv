export default function fetchMovie(movieId) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_MOVIE_REQUEST',
    });
    return fetch(
      `https://gizmo.rakuten.tv/v3/movies/${movieId}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
    )
      .then(async response => {
        const body = await response.json();
        return Object.assign({}, { status: response.status, body });
      })
      .then(({ status, body }) => {
        if (status !== 200) {
          dispatch({
            type: 'FETCH_MOVIE_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_MOVIE_SUCCESS',
            movie: body.data,
          });
        }
      });
  };
}
