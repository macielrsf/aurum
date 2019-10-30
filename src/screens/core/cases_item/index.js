import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';

import {
    AContainer,
    AHeader,
    AText
} from '~/components';

import CasesItemHistory from './components/history';
import CasesItemAttachment from './components/attachment';

import { 
    bgColor, 
    tintColor,
    primaryColor
} from '~/helpers/theme';

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
    },
    divider: {
        borderColor: bgColor,
        borderTopWidth: 0.5
    }
});

class CasesItem extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        const { item } = this.props.navigation.state.params; 

        this.state = {
            case: item,
            attachments: []
        };
    }

    _removeAttachment = (item) => {
        let attachments = [...this.state.attachments];
        let idx = attachments.indexOf(item);

        if ( idx !== -1 ) {
            attachments.splice(idx, 1);
            this.setState({ attachments });
        }
    }

    _documentPicker = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [
                    DocumentPicker.types.images,
                    DocumentPicker.types.pdf,
                ]
            });

            for ( const res of results ) {
                let pushed = this.state.attachments.concat(res);

                this.setState({
                    attachments: pushed
                });
            }
        }
        catch(err) {
            console.warn(err);

            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
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
                        <AText style={styles.headerTitle}>
                            PROCESSO
                        </AText>
                    </View>
                    <View style={styles.headerAlign}>
                        <Icon 
                            name="attach-file" 
                            size={25}
                            color={tintColor}
                            onPress={this._documentPicker} 
                        />
                    </View>
                </View>
            </AHeader>
        );
    }

    _renderField(key, value) {
        return (
            <View>
                <AText style={styles.descriptionKey}>
                    {key}
                </AText> 
                <AText style={styles.descriptionValue}>
                    {value}
                </AText> 
            </View>
        );
    }

    _renderDetails() {
        const amount = this.state.case.amount != undefined ?
            `R$ ${this.state.case.amount.toFixed(2)}` : 'Não informado';

        return (
            <View style={styles.content}>
                <AText style={styles.title}>
                    {this.state.case.title}
                </AText>
                {this._renderField('Número', this.state.case.number)}
                {this.state.case.customers.map(item => {
                    return (
                        <View>
                            {this._renderField('Cliente', item.name)}
                            {this._renderField('Parte', item.roleName)}
                        </View>
                    );
                })}
                {this._renderField('Fórum', this.state.case.court)}
                {this._renderField('Valor', amount)}
                <View>
                    <AText style={styles.descriptionKey}>
                        Anexos
                    </AText> 
                    <CasesItemAttachment 
                        items={this.state.attachments}
                        remove={this._removeAttachment}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <AContainer>
                {this._renderHeader()}
                <ScrollView style={{ flex: 1 }}>
                    {this._renderDetails()}
                    <View style={styles.divider} />
                    <CasesItemHistory 
                        case={this.state.case} 
                    />
                </ScrollView>
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
