import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaulInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';

import backgroudImage from '../../images/background.jpg';
class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    };
    render() {
        return (
            <ImageBackground
                source={backgroudImage}
                style={styles.backgroudImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Log In</HeadingText>
                    </MainText>
                    <ButtonWithBackground
                        onPress={() => alert('hello')}
                        color="#29aaf4">
                        Switch to Login
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaulInput
                            placeholder="Your E-mail Address"
                            style={[styles.input, { borderColor: 'red' }]}
                        />
                        <DefaulInput
                            placeholder="Password"
                            style={styles.input}
                        />
                        <DefaulInput
                            placeholder="Confirm Password"
                            style={styles.input}
                        />
                    </View>
                    <ButtonWithBackground
                        onPress={this.loginHandler}
                        color="#29aaf4">
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
});

export default AuthScreen;
