import actions from '../constants/actions';

export default (state = [], action) => {
  switch(action.type) {
    case actions.SEARCH_FOR_GAME:
      return [...state, ...action.payload.data.results];
    default:
      return state;
  }
}