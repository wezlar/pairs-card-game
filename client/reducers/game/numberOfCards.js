export default function numberOfCards(state = 16, action) {
  switch (action.type) {
    case 'UPDATE_NUMBER_OF_CARDS':
      return action.numberOfCards;
    default:
      return state;
  }
}