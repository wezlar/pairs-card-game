import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from './cards';
import game from './game';

const rootReducer = combineReducers({cards, game, routing: routerReducer});

export default rootReducer;