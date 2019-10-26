import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
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

    componentDidMount() {
        this.props.load();
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
            <View />
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
