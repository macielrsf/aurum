import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import {
    AContainer,
    AButton
} from '~/components';

import {
    primaryColor
} from '~/helpers/theme';

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 35,
        flex: 0.3
    },
    title: {
        fontSize: 33,
        color: primaryColor,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    user: {
        fontSize: 16,
        color: primaryColor,
        fontWeight: 'bold'
    }
});

class Profile extends Component {
    _logout = async () => {
        try {
            await AsyncStorage.removeItem('@auth');
            this.props.navigation.navigate('Auth');
        }
        catch(e) {
            console.warn(e);
        }
    }

    render() {
        return (
            <AContainer>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Usuário
                    </Text>
                    <Text style={styles.user}>
                        {this.props.user}
                    </Text>
                </View>
                <View style={styles.content}>
                    <AButton onPress={this._logout}>
                        SAIR
                    </AButton>
                </View>
            </AContainer>
        );
    }
}

const actions = null

const mapStateToProps = (state) => {
    return ({
        user: state.LoginReducer.user
    })
}

export default connect(mapStateToProps, actions)(Profile);
