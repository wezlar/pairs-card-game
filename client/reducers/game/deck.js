import ACTION_TYPES from '../../actions/constants';

const initialState = [];

export const getInitialState = () => (initialState);

function flipCard(state) {
  return {
    ...state,
    isFlipped: !state.isFlipped,
  };
}

function hasMatched(state) {
  return {
    ...state,
    hasMatched: !state.hasMatched,
  };
}

export default function deck (state = getInitialState(), { type, payload } = {}) {
  switch (type) {
    case ACTION_TYPES.ADD_NEW_DECK:
      return [
        ...payload.deck,
      ];

    case ACTION_TYPES.CARD_FLIP:
      return [
        ...state.slice(0, payload.index),
        flipCard(state[payload.index]),
        ...state.slice(payload.index + 1)
      ];

    case ACTION_TYPES.CARD_MATCHED:
      return [
        ...state.slice(0, payload.index),
        hasMatched(state[payload.index]),
        ...state.slice(payload.index + 1)
      ];
    
    default:
      return state;
  }
}