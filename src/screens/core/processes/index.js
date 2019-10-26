import React, { Component, Fragment } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    load
} from './actions';

import {
    AContainer,
    AInput
} from '~/components';

import { tintColor, bgColor } from '~/helpers/theme';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        flex: 0.4
    },
    content: {
        flex: 1
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold'
    },
    search: {
        flexDirection: 'column'
    },
    divider: {
        borderBottomColor: bgColor,
        borderBottomWidth: 0.5
    }
});

class Processes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: false
        };
    }

    componentDidMount() {
        this.props.load();
    }

    _toggleSearch = () => {
        const showSearch = !this.state.showSearch;

        this.setState({
            ...this.state,
            showSearch 
        });
    }

    _renderItem = ({ item, idx }) => {
        return (
            <Fragment>
                <View style={styles.divider} />
                <View style={{ padding: 30 }}>
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </Fragment>
        );
    }

    _renderHeader() {
        if ( this.state.showSearch ) {
            return (
                <AContainer form={true} style={styles.search}>
                    <Icon 
                        name="arrow-back" 
                        color={tintColor} 
                        size={30} 
                        onPress={this._toggleSearch}
                        style={{ paddingBottom: 10 }}
                    />
                    <AInput 
                        placeholder="Buscar..."
                    />
                </AContainer>
            );
        }

        return (
            <Fragment>
                <Text style={styles.title}>
                    Processos
                </Text>
                <Icon 
                    name="search" 
                    color={tintColor} 
                    size={30} 
                    onPress={this._toggleSearch}
                />
            </Fragment>
        );
    }

    _renderContent() {
        if ( this.props.loading ) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color={tintColor}
                    />
                </View>
            );
        }

        return (
            <Fragment>
                <View style={styles.header}>
                    {this._renderHeader()}
                </View>
                <View style={styles.content}>
                    <FlatList
                        keyExtractor={(item, id) => item.id}
                        renderItem={this._renderItem}
                        data={this.props.cases}
                    />
                </View>
            </Fragment>
        );
    }

    render() {
        return (
            <AContainer>
                {this._renderContent()}
            </AContainer>
        );
    }
}

const actions = {
    load
}

const mapStateToProps = (state) => {
    return ({
        loading: state.ProcessesReducer.loading,
        cases: state.ProcessesReducer.cases
    });
}

export default connect(mapStateToProps, actions)(Processes);
