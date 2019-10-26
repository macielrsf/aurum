import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import * as Screens from './screens';

import configureStore from './reducers';

import { ATabBarButton } from '~/components';

const { store } = configureStore();

const AuthStack = createStackNavigator({
    Login: { screen: Screens.Login }
}, {
    initialRouteName: 'Login'
});

const HomeStack = createBottomTabNavigator({    
        Processes: Screens.Processes,
        Profile: Screens.Profile, 
    },
    {
        navigationOptions: {
            header: null
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarButtonComponent: (props) => (
                <ATabBarButton
                    routeName={navigation.state.routeName}
                    {...props}
                />
            )
        })
    }
);

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
