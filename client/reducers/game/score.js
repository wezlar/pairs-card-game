import ACTION_TYPES from '../../actions/constants';

const initialState = 0;

export const getInitialState = () => (initialState);

export default (state = getInitialState(), { type, payload } = {}) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_SCORE:
      console.log('here ' + (state + payload.score))
      return state + payload.score;
    default:
      return state;
  }
}