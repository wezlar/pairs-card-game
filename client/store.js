import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the route reducer
import rootReducer from './reducers/index';

import cards from './data/cards';
import game from './data/game';

//create an object for the default data
const defaultState = {
    cards,
    game,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;