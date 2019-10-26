import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';

import * as Screens from './screens';

import configureStore from './reducers';

const { store } = configureStore();

const AuthStack = createStackNavigator({
    Login: { screen: Screens.Login }
}, {
    initialRouteName: 'Login'
});

const HomeStack = createBottomTabNavigator({    
    Processes: { screen: Screens.Processes },
    Profile: { screen: Screens.Profile }
})

const AppStack = createStackNavigator({
    Home: { screen: HomeStack }
}, {
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(
    createSwitchNavigator({
        AuthLoading: Screens.AuthLoading,
        Auth: AuthStack,
        App: AppStack
    }, {
        initialRouteName: 'AuthLoading'
    })
);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
