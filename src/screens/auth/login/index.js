import React, { Component } from 'react';
import {
    View,
    StyleSheet,
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

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0
    },
    input: {
        paddingBottom: 15
    },
    button: {
        paddingTop: 40
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 35,
        flex: 0.5
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#485357'
    }
});

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
                        />
                    </View>
                    <View>
                        <AInput 
                            ref={(r) => this.password = r}
                            placeholder="Senha" 
                            secureTextEntry
                            onSubmitEditing={this._login}
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

const actions = null

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, actions)(Login);
