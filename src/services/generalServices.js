import axios from 'axios';
import generalActions from 'actions/generalActions';

const baseUrl = 'https://itunes.apple.com/us/rss/topmovies/limit=100/json';

const getMovies = (params) => (dispatch) => {
  const source = axios.CancelToken.source();
  axios
    .get(baseUrl, {
      cancelToken: source.token,
      params: {
        ...params,
      },
    })
    .then(({ data }) => {
      dispatch(generalActions.setResponse(data));
    })
    .catch((err) => {
      if (!axios.isCancel(err)) {
        // do sth
      }
    });

  return { cancel: () => source.cancel() };
};

export default { getMovies };
