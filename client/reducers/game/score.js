import ACTION_TYPES from '../../actions/constants';

export default function score(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_SCORE:
      return state + action.score;
    default:
      return state;
  }
}