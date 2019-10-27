import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';

class CasesItem extends Component {

    constructor(props) {
        super(props);
        const { item } = this.props.navigation.state.params; 
        this._case = item;
        console.warn(this._case);
    }

    render() {
        return (
            <View />
        );
    }
}

const actions = null

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps, actions)(CasesItem);
