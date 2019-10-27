import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import LoginReducer from '~/screens/auth/login/reducers';
import CasesReducer from '~/screens/core/cases/reducers';

const loginPersistConfig = {
    key: 'login',
    storage: AsyncStorage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    LoginReducer: persistReducer(
        loginPersistConfig,
        LoginReducer
    ),
    CasesReducer
});

export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);

    return { store, persistor };
}
