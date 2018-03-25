import actions from '../constants/actions';

export default (state = [], action) => {
  switch(action.type) {
    case actions.SAVE_GAME:
      return [...state, action.payload.game];
    case actions.SEARCH_FOR_GAME:
      return [action.payload.data.results];
    default:
      return state;
  }
}