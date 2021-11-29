import axios from "axios";
import {getItemFromLocalStorage} from "./common";

const config = {
    headers: {
        'Content-type': 'application/json'
    }
}

export function authorizedGet(url) {
    let accessToken = getItemFromLocalStorage('accessToken');
    return axios.get('api' + url,{
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
}

// Api Calls

export const ClientAuthorization = (data) => {
    return axios.post('/api/users/login', data);
}
