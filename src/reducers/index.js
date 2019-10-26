import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import LoginReducer from '~/screens/auth/login/reducers';
import ProcessesReducer from '~/screens/core/processes/reducers';

const rootReducer = combineReducers({
    LoginReducer,
    ProcessesReducer
});

export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return { store };
}
