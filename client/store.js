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

// tell redux dev tools about our store (video 19)
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;