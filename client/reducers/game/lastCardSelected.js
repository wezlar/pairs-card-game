import ACTION_TYPES from '../../actions/constants'

export default function lastCardSelected(state = '', action) {
  switch (action.type) {
    case ACTION_TYPES.CARD_SELECTED:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}