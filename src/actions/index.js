import axios from 'axios';

const ROOT_URL = 'https://dani-api.herokuapp.com/';
export const FETCH_PLANS = 'FETCH_PLANS';
export const CREATE_PLAN = 'CREATE_PLAN';

export function fetchPlans() {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_PLANS,
        payload: request
    };
}

export function createPlans(values, callback) {
    const request = axios.post(`${ROOT_URL}questions`, values).then(() => callback());
    return {
        type: CREATE_PLAN,
        payload: request
    }
}