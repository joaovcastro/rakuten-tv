export default function fetchLists(movieId) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_TRAILER_REQUEST',
    });
    return fetch(
      'https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audio_language: 'SPA',
          audio_quality: '2.0',
          content_id: movieId,
          content_type: 'movies',
          device_serial: 'device_serial_1',
          device_stream_video_quality: 'FHD',
          player: 'web:PD-NONE',
          subtitle_language: 'MIS',
          video_type: 'trailer',
        }),
      },
    )
      .then(async response => {
        const body = await response.json();
        return Object.assign({}, { status: response.status, body });
      })
      .then(({ status, body }) => {
        if (status !== 200) {
          dispatch({
            type: 'FETCH_TRAILER_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_TRAILER_SUCCESS',
            list: body.data,
          });
        }
      });
  };
}
