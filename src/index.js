import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers/index';
import PlanIndex from './pages/plan_index';
import PlanNew from './pages/plan_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
            <Route path='/plan/new' component={PlanNew} />
            <Route path='/' component={PlanIndex} />
        </Switch>
    </BrowserRouter>
</Provider>, document.querySelector('.container'));