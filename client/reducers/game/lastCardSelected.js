import ACTION_TYPES from '../../actions/constants';

const initialState = {
  index: null,
  name: '',
};

export const getInitialState = () => (initialState);

export default (state = getInitialState(), { type, payload } = {}) => {
  switch (type) {
    case ACTION_TYPES.CARD_SELECTED:
      return {
        ...payload
      };
    default:
      return state;
  }
};
