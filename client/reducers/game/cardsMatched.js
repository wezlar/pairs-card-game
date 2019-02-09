export default function cardsMatched(state = 0, action) {
  switch (action.type) {
    case 'CARDS_MATCHED':
      return state + action.cardsMatched;
    default:
      return state;
  }
}