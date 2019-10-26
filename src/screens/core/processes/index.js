import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

import {
    load
} from './actions';

import {
    AContainer
} from '~/components';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

class Processes extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.load();
    }

    _logout = async () => {
        try {
            await AsyncStorage.removeItem('@auth');
            this.props.navigation.navigate('Auth');
        }
        catch(e) {
            console.warn(e);
        }
    }

    _renderContent() {
        if ( this.props.loading ) {
            return (
                <ActivityIndicator
                    size="large"
                    color="black"
                />
            );
        }

        return (
            <Button title="Sair" onPress={this._logout} />
        );
    }

    render() {
        return (
            <AContainer style={styles.container}>
                {this._renderContent()}
            </AContainer>
        );
    }
}

const actions = {
    load
}

const mapStateToProps = (state) => {
    return ({
        loading: state.ProcessesReducer.loading,
        cases: state.ProcessesReducer.cases
    });
}

export default connect(mapStateToProps, actions)(Processes);
