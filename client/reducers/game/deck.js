function flipCard(state) {
  return {
    ...state,
    isFlipped: !state.isFlipped,
  }
}

export default function deck (state = {}, action) {
  switch (action.type) {
    case 'ADD_NEW_DECK':
      return [
        ...state,
        ...action.deck,
      ];

    case 'CARD_FLIP':
      return [
        ...state.slice(0, action.index),
        flipCard(state[action.index]),
        ...state.slice(action.index + 1)
      ];
    
    default:
      return state;
  }
}