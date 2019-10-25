import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

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

class Home extends Component {

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
            <Container style={styles.container}>
                <Button title="Sair" onPress={this._logout} />
            </Container>
        );
    }
}

const actions = null

const mapStateToProps = (state) => {
    return ({

    });
}

export default connect(mapStateToProps, actions)(Home);
