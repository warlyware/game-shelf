import actions from '../constants/actions';

export default (state = [], action) => {
  switch(action.type) {
    case actions.FETCH_GAME:
      return [...action.payload.data.results, ...state];
    default:
      return state;
  }
}