import ACTION_TYPES from '../../actions/constants'

export default function numberOfCards(state = 16, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_NUMBER_OF_CARDS:
      return action.numberOfCards;
    default:
      return state;
  }
}