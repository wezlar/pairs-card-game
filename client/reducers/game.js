function gameDeck (state = [], action) {
  switch(action.type) {
    case 'ADD_NEW_DECK':
      return [
        ...state, 
        ...action.deck
      ];
    case 'CARD_FLIP':
      return {
        ...state,
        isFlipped: !state.isFlipped,
      };
    default:
      return state;
  }
}

export function game (state = [], action) {
  if(typeof action.deck !== 'undefined') {
    return {
        // take the current state
        ...state,
        //overwrite this post with a new one
        ['deck']: gameDeck(state['deck'], action),
    }
  } else if (typeof action.index !== 'undefined') {
    // console.log(state['deck']);
    // let newState = {...state}
    // let flip = newState.deck[action.index].isFlipped
    // newState.deck[action.index].isFlipped = !flip
    // return {
    //   ...newState,
    // }
    console.log({
      ...state,
      ['deck']: {
        ...state.deck,
        [action.index]: gameDeck(state.deck[action.index], action), 
      },
    })
    return {
      ...state,
      ['deck']: {
        ...state.deck,
        [action.index]: gameDeck(state.deck[action.index], action),
      },
    }
  }
  return state;
}

export default game;