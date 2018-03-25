import axios from 'axios';

import actions from '../constants/actions';
import API_KEY from '../API_KEY';

const giantBombApiUrl = `
  //www.giantbomb.com/api/search/?api_key=${API_KEY}&format=JSON
`;

export function searchForGame(game) {
  const requestUrl = `${giantBombApiUrl}&query=${game}`;
  const request = axios.get(requestUrl);

  return {
    type: actions.SEARCH_FOR_GAME,
    payload: request
  }
}

export function saveGame(game) {
  return {
    type: actions.SAVE_GAME,
    payload: game
  }
}