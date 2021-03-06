import ACTION_TYPES from '../../actions/constants';

const initialState = 0;

export const getInitialState = () => (initialState);

export default (state = getInitialState(), { type, payload } = {}) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_SCORE:
      return state + payload.score;
    default:
      return state;
  }
};
