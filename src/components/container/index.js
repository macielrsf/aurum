import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default class Container extends Component {

    render() {
        const { style } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[defaultStyle, style]}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}
