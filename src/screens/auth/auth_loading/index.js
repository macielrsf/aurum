import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Image,
    Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
    AContainer
} from '~/components';

import logo from '~/assets/logo.png';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: width - 100
    }
});

export default class AuthLoading extends Component {

    async componentDidMount() {
        const intro = await AsyncStorage.getItem('@intro_showed');

        if ( !intro ) {
            this.props.navigation.navigate('Intro');
        }
        else {
            const auth = await AsyncStorage.getItem('@auth');
            await this._timeout(1500);

            this.props.navigation.navigate(auth ? 'App' : 'Auth');
        }
    }

    _timeout = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        return (
            <AContainer style={styles.container}>
                <Image 
                    source={logo} 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </AContainer> 
        );
    }
}
