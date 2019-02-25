import ACTION_TYPES from '../../actions/constants';

export default function cardsMatched(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.CARDS_MATCHED:
      return state + action.cardsMatched;
    default:
      return state;
  }
}