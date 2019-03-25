export default function fetchLists(listName) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_LIST_REQUEST',
    });
    return fetch(
      `https://gizmo.rakuten.tv/v3/lists/${listName}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
      // 'http://localhost:3000/taquilla',
    )
      .then(async response => {
        const body = await response.json();
        return Object.assign({}, { status: response.status, body });
      })
      .then(({ status, body }) => {
        if (status !== 200) {
          dispatch({
            type: 'FETCH_LIST_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_LIST_SUCCESS',
            list: body.data,
          });
        }
      });
  };
}
