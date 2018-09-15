import axios from 'axios';
//token = base64_encode('username:passwd');
//request header('token:{token}')
// http://106.14.173.210:92/appd/api.php?a=target&add|list|edit&token={token}&params
// http://106.14.173.210:92/appd/api.php?a=user&reg&token={token}&params
// http://106.14.173.210:92/appd/api.php?a=auth&name=admin&pass=admins  dev

const token = 'YWRtaW46YWRtaW5z'
const ROOT_URL = `http://106.14.173.210:92/appd/api.php?a=target&token=${token}&`;
// const ROOT_URL = 'https://dani-api.herokuapp.com/';
export const FETCH_PLANS = 'FETCH_PLANS';
export const CREATE_PLAN = 'CREATE_PLAN';

export function fetchPlans() {
    const request = axios.get(`${ROOT_URL}list`);
    return {
        type: FETCH_PLANS,
        payload: request
    };
}

// export function fetchPlans() {
//     const request = axios.get(ROOT_URL);
//     return {
//         type: FETCH_PLANS,
//         payload: request
//     };
// }