import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default class AContainer extends Component {

    _renderContent() {
        const { style } = this.props;

        if ( this.props.form ) {
            return (
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                    acessible={false}>
                    <KeyboardAvoidingView
                        behavior={Platform.select({
                            ios: 'padding',
                            android: null
                        })}
                        style={[style, defaultStyle.container]}>
                        {this.props.children}
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            );
        }

        return (
            <View style={[style, defaultStyle.container]}>
                {this.props.children}
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this._renderContent()}
            </SafeAreaView>
        );
    }
}
