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
        const { items } = this.props;

        this.state = {
            items
        };
    }

    _remove(item) {
        let items = [...this.state.items];
        let idx = items.indexOf(item);

        if ( idx !== -1 ) {
            items.splice(idx, 1);
            this.setState({ items });
        }
    }

    _renderAttachment = ({ item, idx }) => {
        return (
            <View key={idx} style={styles.content}>
                <View style={styles.box}>
                    <AText style={styles.title}>
                        {item.path}
                    </AText>
                </View> 
                <Icon 
                    name="close"
                    onPress={() => this._remove(item)}
                    color={primaryColor}
                    size={25}
                /> 
            </View>
        );
    }

    _renderContent() {
        if ( this.state.items.length <= 0 ) {
            return (
                <AText>
                    Nenhum anexo
                </AText>
            );
        }

        return (
            <FlatList
                keyExtractor={item => item.id}
                data={this.state.items}
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
