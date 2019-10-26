import * as types from '../constants';

const INITIAL_STATE = {
    loading: false,
    cases: []
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case types.CASES_LOADED: {
            return {
                ...state,
                cases: action.payload
            }
        }
        default:
            return state;
    }
}
