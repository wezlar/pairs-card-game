export default function numberOfCards(state = 16, action) {
  switch (action.type) {
    case 'NUMBER_OF_CARDS_UPDATE':
      return action.payload;
    default:
      return state;
  }
}