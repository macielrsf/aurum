import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {
    AContainer,
    AButton,
    AInput
} from '~/components';

import styles from './styles';

import {
    changeUser,
    changePassword
} from './actions';

class Login extends Component {
    static navigationOptions = {
        header: null
    };

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
            <AContainer form={true}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.input}>
                        <AInput 
                            placeholder="Usuário" 
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            onSubmitEditing={() => this.password.getRef().focus()}
                            returnKeyType="next"
                            onChangeText={text => this.props.changeUser(text)}
                            value={this.props.user}
                        />
                    </View>
                    <View>
                        <AInput 
                            ref={(r) => this.password = r}
                            placeholder="Senha" 
                            secureTextEntry
                            onSubmitEditing={this._login}
                            onChangeText={text => this.props.changePassword(text)}
                            value={this.props.password}
                        />
                    </View>
                    <View style={styles.button}>
                        <AButton onPress={this._login}>
                            ENTRAR
                        </AButton>
                    </View>
                </View>
            </AContainer>
        );
    }
}

const actions = {
    changeUser,
    changePassword
}

const mapStateToProps = (state) => {
    return ({
        user: state.LoginReducer.user,
        password: state.LoginReducer.password
    })
}

export default connect(mapStateToProps, actions)(Login);
