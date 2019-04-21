import ACTION_TYPES from '../../actions/constants';

const initialState = 16;

export const getInitialState = () => (initialState);

export default (state = getInitialState(), { type, payload } = {}) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_NUMBER_OF_CARDS:
      return payload.numberOfCards;
    default:
      return state;
  }
}