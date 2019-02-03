export default function lastCardSelected(state = '', action) {
  switch (action.type) {
    case 'CARD_SELECTED':
      return {
        ...action.payload
      };
    default:
      return state;
  }
}