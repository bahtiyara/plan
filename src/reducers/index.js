import {combineReducers} from 'redux';

import PlansReducer from './reducer_plans';

export default combineReducers({
    plans: PlansReducer
});