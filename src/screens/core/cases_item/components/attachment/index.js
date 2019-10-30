import React, { Component } from 'react';
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    tintColor,
    primaryColor
} from '~/helpers/theme';

import {
    AText
} from '~/components';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        flex: 1
    },
    title: {
        fontSize: 16,
        color: '#FFF'
    },
    box: {
        backgroundColor: tintColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 45,
        paddingHorizontal: 20
    }
});

export default class CasesItemAttachment extends Component {

    constructor(props) {
        super(props);
    }

    _renderAttachment = ({ item, idx }) => {
        return (
            <View key={idx} style={styles.content}>
                <View style={styles.box}>
                    <AText style={styles.title}>
                        {item.name}
                    </AText>
                </View> 
                <Icon 
                    name="close"
                    onPress={() => this.props.remove(item)}
                    color={primaryColor}
                    size={25}
                /> 
            </View>
        );
    }

    _renderContent() {
        if ( this.props.items.length <= 0 ) {
            return (
                <AText>
                    Nenhum anexo
                </AText>
            );
        }

        return (
            <FlatList
                keyExtractor={item => item.id}
                data={this.props.items}
                renderItem={this._renderAttachment}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderContent()}
            </View>
        );
    }
}
