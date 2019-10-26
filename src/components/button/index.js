import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00B7FF',
        borderRadius: 8,
        width: width - 70,
        height: 50
    },
    text: {
        color: 'white'
    }
});

export default class AButton extends Component {

    render() {
        const { style } = this.props;

        return (
            <TouchableOpacity {...this.props} style={[style, styles.button]}>
                <Text style={styles.text}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    } 
}
