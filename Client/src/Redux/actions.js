 import axios from 'axios';

//login actions
export function login({ email, password , movements}) {
    let data = { email, password , movements};
    return async function (dispatch) {
        
        var json = await axios.post(`http://localhost:5000/api/auth/login`, data);
                return dispatch({
            type: 'LOGIN',
            payload: json.data,
        },
        (window.location.href = '/'));
    };
}

export function register({ email,username, password }) {
    let data = { email, username,password };
    return async function (dispatch) {
     
        var json = await axios.post(`http://localhost:5000/api/auth/register`, data);
        return dispatch({
            type: 'LOGIN',
            payload: json.data,
        },(window.location.href = "/login"));
        
    };}


export function logout() {  
    return function (dispatch) {
        return dispatch({
            type: 'LOGOUT',
        },(window.location.href = "/welcome"));
    }
}

