import { combineReducers } from 'redux';

import GameReducer from './game';

const rootReducer = combineReducers({
  games: GameReducer
});

export default rootReducer;