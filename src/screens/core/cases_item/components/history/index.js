import React, { Component, Fragment } from 'react';
import {
    View,
    StyleSheet,
    Picker,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    AContainer,
    AText
} from '~/components';

import { 
    bgColor, 
    tintColor,
    primaryColor
} from '~/helpers/theme';

const Item = Picker.Item;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    content: {
        flexDirection: 'row',
        paddingBottom: 30,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    orderType: {
        width: 190,
        paddingRight: 15
    },
    contentRight: {
        flex: 0.2,
        alignItems: 'center'
    },
    contentLeft: {
        flex: 0.8,
    },
    timeline: {
        backgroundColor: bgColor, 
        flexDirection: 'column',
        paddingVertical: 10,
        width: 2,
        flex: 1 
    },
    dateBox: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: tintColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    day: {
        fontSize: 16,
        color: '#FFF'
    },
    month: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    year: {
        color: bgColor
    },
    description: {
        paddingTop: 15,
        fontSize: 16
    }
});

const ORDER_TYPE = [{
    value: 'date',
    label: 'Ordenar por data'
}, {
    value: 'description',
    label: 'Ordernar por descrição'
}];

const monthMap = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
};

export default class CasesItemHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order_type: 'date' 
        };
    }

    _orderChange = (order_type) => {
        this.setState({
            order_type
        });
    }

    _renderList() {
        return this.props.case.historicals.map(item => {
            const day = new Date(item.date).getDate();
            const month = new Date(item.date).getMonth();
            const year = new Date(item.date).getFullYear();

            return (
                <View style={styles.content}>
                    <View style={styles.contentRight}>
                        <View style={styles.dateBox}>
                            <AText style={styles.day}>
                                {day}
                            </AText>                     
                        </View>
                        <View style={styles.timeline} />
                    </View>
                    <View style={styles.contentLeft}>
                        <AText style={styles.month}>
                            {monthMap[month]}
                        </AText>
                        <AText style={styles.year}>
                            {year}
                        </AText>
                        <AText style={styles.description}>
                            {item.description}
                        </AText>
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <AContainer style={styles.container}>
                <View style={styles.header}>
                    <AText style={styles.title}>
                        HISTÓRICO
                    </AText>
                    <Fragment>
                        <Picker 
                            style={styles.orderType}
                            selectedValue={this.state.order_type} 
                            onValueChange={this._orderChange}>
                            {ORDER_TYPE.map(item => {
                                return (
                                    <Item 
                                        value={item.value}
                                        label={item.label}
                                    />
                                );
                            })}
                        </Picker>
                        <Icon
                            name="sort-descending"
                            size={25}
                            onPress={() => console.warn('teste')}
                        />
                    </Fragment>
                </View>
                <View style={{ paddingTop: 20 }}>
                    {this._renderList()}
                </View>
            </AContainer>
        );
    }
}
