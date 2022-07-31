const localStorage = window.localStorage.getItem('loggedAppUser')
    ? JSON.parse(window.localStorage.getItem('loggedAppUser'))
    : undefined;

const initialState = {
    user:  localStorage ? localStorage : {},
    user_id: localStorage ? localStorage : {}
}


export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
            };
        case 'UserId': 
            return {
                ...state,
                user_id: action.payload,
            };
        default:
            return state;
    }
}