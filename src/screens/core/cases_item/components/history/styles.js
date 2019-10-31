import {
    StyleSheet
} from 'react-native';

import {
    tintColor,
    bgColor
} from '~/helpers/theme';

export default StyleSheet.create({
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
