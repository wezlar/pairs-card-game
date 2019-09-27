import ACTION_TYPES from '../../actions/constants';

const initialState = 0;

export const getInitialState = () => (initialState);

export default (state = getInitialState(), { type, payload } = {}) => {
  switch (type) {
    case ACTION_TYPES.CARDS_MATCHED:
      return state + payload.cardsMatched;
    default:
      return state;
  }
};
