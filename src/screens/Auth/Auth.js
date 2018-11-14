import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaulInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';

import backgroudImage from '../../images/background.jpg';
class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
        };
        Dimensions.addEventListener('change', this.updateStyles);
    }

    componentWillUnmount = () => {
        Dimensions.removeEventListener('change', this.updateStyles);
    };

    updateStyles = dims => {
        this.setState({
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape',
        });
    };

    loginHandler = () => {
        startMainTabs();
    };
    render() {
        let headingText = null;
        if (this.state.viewMode === 'portrait') {
            headingText = (
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            );
        }
        return (
            <ImageBackground source={backgroudImage} style={styles.backgroudImage}>
                <View style={styles.container}>
                    {headingText}
                    <ButtonWithBackground onPress={() => alert('hello')} color="#29aaf4">
                        Switch to Login
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaulInput placeholder="Your E-mail Address" style={[styles.input, { borderColor: 'red' }]} />
                        <View
                            style={
                                this.state.viewMode === 'portrait'
                                    ? styles.portraitPasswordContainer
                                    : styles.landscapePasswordContainer
                            }>
                            <View
                                style={
                                    this.state.viewMode === 'portrait'
                                        ? styles.portraitPasswordWrapper
                                        : styles.landscapePasswordWrapper
                                }>
                                <DefaulInput placeholder="Password" style={styles.input} />
                            </View>
                            <View
                                style={
                                    this.state.viewMode === 'portrait'
                                        ? styles.portraitPasswordWrapper
                                        : styles.landscapePasswordWrapper
                                }>
                                <DefaulInput placeholder="Confirm Password" style={styles.input} />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    backgroudImage: {
        width: '100%',
        flex: 1,
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb',
    },
    inputContainer: {
        width: '80%',
    },
    landscapePasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    portraitPasswordContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    landscapePasswordWrapper: {
        width: '45%',
    },
    portraitPasswordWrapper: {
        width: '100%',
    },
});

export default AuthScreen;
