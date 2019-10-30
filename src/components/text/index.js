import React, { Component } from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

import {
    primaryColor
} from '~/helpers/theme';

const styles = StyleSheet.create({
    defaultStyle: {
        color: primaryColor
    }
});

export default class AText extends Component {
    render() {
        const { style } = this.props;

        return (
            <Text 
                {...this.props}
                style={[styles.defaultStyle, style]}>
                {this.props.children}
            </Text>
        );
    }
}
