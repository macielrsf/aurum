import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    AContainer,
    AHeader
} from '~/components';

import { bgColor, tintColor } from '~/helpers/theme';

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    headerAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descriptionKey: {
        color: bgColor,
        fontSize: 15,
        paddingBottom: 5,
        paddingTop: 15
    },
    descriptionValue: {
        fontSize: 15
    }
});

class CasesItem extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        const { item } = this.props.navigation.state.params; 
        this._case = item;
    }

    _renderHeader() {
        return (
            <AHeader>
                <View style={styles.headerContent}>
                    <View style={styles.headerAlign}>
                        <Icon 
                            name="arrow-back" 
                            size={25}
                            color={tintColor}
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <Text style={styles.headerTitle}>
                            PROCESSO
                        </Text>
                    </View>
                    <View style={styles.headerAlign}>
                        <Icon 
                            name="attach-file" 
                            size={25}
                            color={tintColor}
                            onPress={() => console.warn('attach')} 
                        />
                    </View>
                </View>
            </AHeader>
        );
    }

    _renderField(key, value) {
        return (
            <View>
                <Text style={styles.descriptionKey}>
                    {key}
                </Text> 
                <Text style={styles.descriptionValue}>
                    {value}
                </Text> 
            </View>
        );
    }

    _renderContent() {
        return (
            <View />
        );
    }

    render() {
        const amount = this._case.amount != undefined ?
            `R$ ${this._case.amount.toFixed(2)}` : 'Não informado';

        return (
            <AContainer>
                {this._renderHeader()}
                <View style={styles.content}>
                    <Text style={styles.title}>
                        {this._case.title}
                    </Text>
                    {this._renderField('Número', this._case.number)}
                    {this._case.customers.map(item => {
                        return (
                            <View>
                                {this._renderField('Cliente', item.name)}
                                {this._renderField('Parte', item.roleName)}
                            </View>
                        );
                    })}
                    {this._renderField('Fórum', this._case.court)}
                    {this._renderField('Valor', amount)}
                </View>
            </AContainer>
        );
    }
}

const actions = null

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, actions)(CasesItem);
