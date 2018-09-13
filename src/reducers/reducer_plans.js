import {FETCH_PLANS} from '../actions';
import _ from 'lodash';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PLANS:
            return _.mapKeys(action.payload.data.data, 'id');
        default:
            return state;
    }
}