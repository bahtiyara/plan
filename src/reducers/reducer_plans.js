import {FETCH_PLANS} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PLANS:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}