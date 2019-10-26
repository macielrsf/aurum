import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

import { bgColor } from '~/helpers/theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    box: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: bgColor,
        height: 50,
        width: width - 70
    },
    input: {
        paddingLeft: 15,
        borderRadius: 5,
        flex: 1
    }
});

export default class AInput extends Component {

    getRef = () => this.ref;

    render() {
        const { style } = this.props;
        
        return (
            <View style={styles.box}>
                <TextInput
                    {...this.props}
                    ref={(r) => this.ref = r}
                    style={[style, styles.input]}
                />
            </View>
        );
    } 
}
