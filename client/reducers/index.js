import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from './cards';
import game from './game/index';

const rootReducer = combineReducers({cards, game, routing: routerReducer});

export default rootReducer;