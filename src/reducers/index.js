import { combineReducers } from 'redux';

import GameReducer from './game';

const rootReducer = combineReducers({
  game: GameReducer
});

export default rootReducer;