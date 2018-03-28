import actions from '../constants/actions';

export default (state = [], action) => {
  switch(action.type) {
    case actions.SAVE_GAME:
    let result = [action.payload, ...state];
      console.log(result);
      return result;
    default:
      return state;
  }
}