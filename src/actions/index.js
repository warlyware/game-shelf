import axios from 'axios';

import actions from '../constants/actions';
import API_KEY from '../API_KEY';

const giantBombApiUrl = `
  //www.giantbomb.com/api/search/?api_key=${API_KEY}&format=JSON
`;

export function fetchGame(game) {
  const requestUrl = `${giantBombApiUrl}&query=${game}`;
  const request = axios.get(requestUrl);

  return {
    type: actions.FETCH_GAME,
    payload: request
  }
}