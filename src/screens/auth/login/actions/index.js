import * as types from '../constants';

export const changeUser = (value) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_USER,
            payload: value
        });
    }
}

export const changePassword = (value) => {
    return dispatch => {
        dispatch({
            type: types.CHANGE_PASSWORD,
            payload: value
        });
    }
}
