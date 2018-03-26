import { combineReducers } from 'redux';

import SearchReducer from './search';
import GameReducer from './game';

const rootReducer = combineReducers({
  search: SearchReducer,
  savedGames: GameReducer
});

export default rootReducer;