import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Container
} from '~/components';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

class Login extends Component {

    _login = async () => {
        try {
            await AsyncStorage.setItem('@auth', 'true');
            this.props.navigation.navigate('App');
        }
        catch(e) {
            console.warn(e);
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Button title="Login" onPress={this._login}/>
            </Container>
        );
    }
}

const actions = null

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, actions)(Login);
