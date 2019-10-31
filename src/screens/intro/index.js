import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
    AContainer,
    AText,
} from '~/components';

import {
    tintColor,
    primaryColor
} from '~/helpers/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        fontSize: 18
    },
    dotStyle: {
        backgroundColor: 'rgba(191,191,191,0.3)'
    },
    activeDotStyle: {
        backgroundColor: tintColor
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color: tintColor
    }
});

const SLIDES = [{
    title: 'Aurum App!',
    description: 'Tenha todas as informações dos processos na palma da mão.'
}, {
    title: 'Não perca o controle!',
    description: 'Com o Aurum App, é possível ver o histórico dos processos e anexas imagens e PDFs.'
}];

export default class Intro extends Component {

    _doneHandle = async () => {
        try {
            await AsyncStorage.setItem('@intro_showed', 'true');
            this.props.navigation.navigate('AuthLoading');
        }
        catch(err) {
            console.warn(err);
        }
    }

    _renderItem = ({ item }) => {
        return (
            <AContainer style={styles.container}>
                <AText style={styles.title}>
                    {item.title} 
                </AText>
                <AText style={styles.description}>
                    {item.description} 
                </AText>
            </AContainer>
        );
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={this._renderItem}
                slides={SLIDES}
                onSkip={this._doneHandle}
                onDone={this._doneHandle}
                showSkipButton={true}
                doneLabel="Ok!"
                prevLabel="Voltar"
                nextLabel="Próximo"
                skipLabel="Pular"
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                buttonTextStyle={styles.buttonTextStyle}
            />
        );
    }
}
