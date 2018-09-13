import axios from 'axios';

const ROOT_URL = 'http://106.14.173.210:92/appd/api.php?a=';
export const FETCH_PLANS = 'FETCH_PLANS';
export const CREATE_PLAN = 'CREATE_PLAN';

export function fetchPlans() {
    const request = axios.get(`${ROOT_URL}list`);
    return {
        type: FETCH_PLANS,
        payload: request
    };
}