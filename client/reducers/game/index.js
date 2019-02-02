import { combineReducers } from 'redux';
import numberOfCards from './numberOfCards';
import score from './score';
import deck from './deck';

const game = combineReducers({
  numberOfCards,
  score,
  deck,
});

export default game;