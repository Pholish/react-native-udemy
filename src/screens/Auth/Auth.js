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
            respStyles: {
                pwContainerDirection: 'column',
                pwContainerJustifyContent: 'flex-start',
                pwWrapperWidth: '100%',
            },
        };
        Dimensions.addEventListener('change', dims => {
            this.setState({
                pwContainerDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
                pwContainerJustifyContent: Dimensions.get('window').height > 500 ? 'flex-start' : 'space-between',
                pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%',
            });
        });
    }

    loginHandler = () => {
        startMainTabs();
    };
    render() {
        let headingText = null;
        if (Dimensions.get('window').height > 500) {
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
                            style={{
                                flexDirection: this.state.respStyles.pwContainerDirection,
                                justifyContent: this.state.respStyles.pwContainerJustifyContent,
                            }}>
                            <View
                                style={{
                                    width: this.state.respStyles.pwWrapperWidth,
                                }}>
                                <DefaulInput placeholder="Password" style={styles.input} />
                            </View>
                            <View
                                style={{
                                    width: this.state.respStyles.pwWrapperWidth,
                                }}>
                                ><DefaulInput placeholder="Confirm Password" style={styles.input} />
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
});

export default AuthScreen;
