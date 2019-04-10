import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App/App';
import Game from './components/Game/Game';

// use if not using router
// render(<Main />, document.getElementById('root'));

// import react router devs
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Game }></IndexRoute>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));