import * as types from '../constants';

const INITIAL_STATE = {
    user: null,
    password: null
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.CHANGE_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case types.CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        default: 
            return state;
    }
}
