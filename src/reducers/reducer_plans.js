import {FETCH_PLANS, TRASH_PLAN} from '../actions';
import _ from 'lodash';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PLANS:
            return _.mapKeys(action.payload.data.data, 'id');
        case TRASH_PLAN:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}