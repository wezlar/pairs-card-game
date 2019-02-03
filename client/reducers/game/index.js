import { combineReducers } from 'redux';
import numberOfCards from './numberOfCards';
import score from './score';
import deck from './deck';
import lastCardSelected from './lastCardSelected';

const game = combineReducers({
  numberOfCards,
  score,
  deck,
  lastCardSelected,
});

export default game;