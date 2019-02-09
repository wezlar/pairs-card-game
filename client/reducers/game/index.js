import { combineReducers } from 'redux';
import numberOfCards from './numberOfCards';
import score from './score';
import deck from './deck';
import lastCardSelected from './lastCardSelected';
import cardsMatched from './cardsMatched';

const game = combineReducers({
  numberOfCards,
  score,
  deck,
  lastCardSelected,
  cardsMatched,
});

export default game;