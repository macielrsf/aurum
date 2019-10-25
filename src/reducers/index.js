import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import LoginReducer from '~/screens/auth/login/reducers';

const rootReducer = combineReducers({
    LoginReducer: LoginReducer
});

export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return { store };
}
