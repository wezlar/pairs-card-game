export default function score(state = 0, action) {
  switch (action.type) {
    case 'SCORE_UPDATE':
      return action.payload;
    default:
      return state;
  }
}