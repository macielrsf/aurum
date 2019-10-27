import React, { Component, Fragment } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity
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
    },
    titleCase: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    numberCase: {
        color: bgColor,
        paddingTop: 20
    }
});

class Cases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            search: null,
            filtered: []
        };
    }

    componentDidMount() {
        this.props.load();
    }

    _toggleSearch = () => {
        const showSearch = !this.state.showSearch;

        this.setState({
            ...this.state,
            showSearch,
            search: null
        });
    }

    _search(search) {
        const filtered = this.props.cases.filter(item => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });

        this.setState({
            ...this.state,
            search,
            filtered
        });
    }

    _renderItem = ({ item, idx }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CasesItem', { item })}>
                <View style={styles.divider} />
                <View style={{ padding: 20 }}>
                    <Text style={styles.titleCase}>
                        {item.title}
                    </Text>
                    <Text style={styles.numberCase}>
                        Número
                    </Text>
                    <Text>
                        {item.number}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderList() {
        if ( this.state.search ) {
            return (
                <FlatList
                    keyExtractor={(item, id) => item.id}
                    renderItem={this._renderItem}
                    data={this.state.filtered}
                />
            );
        }

        return (
            <FlatList
                keyExtractor={(item, id) => item.id}
                renderItem={this._renderItem}
                data={this.props.cases}
            />
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
                        value={this.state.search}
                        onChangeText={text => this._search(text)}
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

        if ( !this.props.loading &&
             this.props.cases.length <= 0 ) {
            return (
                <View style={styles.loading}>
                    <Icon
                        name="refresh"
                        size={40}
                        color={tintColor}
                        onPress={() => this.props.load()}
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
                    {this._renderList()}
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
        loading: state.CasesReducer.loading,
        cases: state.CasesReducer.cases
    });
}

export default connect(mapStateToProps, actions)(Cases);
