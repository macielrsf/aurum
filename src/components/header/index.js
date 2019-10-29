import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3.0,
        elevation: 5,
        height: 65,
        width
    }
});

export default class AHeader extends Component {

    render() {
        return (
            <View style={styles.header}>
                {this.props.children}
            </View>
        );
    }
}
