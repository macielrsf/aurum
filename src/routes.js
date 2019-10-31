import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import * as Screens from './screens';

import { ATabBarButton } from '~/components';

const AuthStack = createStackNavigator({
    Login: { screen: Screens.Login }
}, {
    initialRouteName: 'Login'
});

const HomeStack = createBottomTabNavigator({    
        Cases: Screens.Cases,
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
    Home: HomeStack,
    CasesItem: Screens.CasesItem
}, {
    initialRouteName: 'Home'
});

export const AppContainer = createAppContainer(
    createSwitchNavigator({
        Intro: Screens.Intro,
        AuthLoading: Screens.AuthLoading,
        Auth: AuthStack,
        App: AppStack
    }, {
        initialRouteName: 'AuthLoading'
    })
);
