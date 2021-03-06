import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import validate from '../../utility/validation';
class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: 'pink',
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);
        this.state = {
            controls: {
                placeName: {
                    value: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        notEmpty: true,
                    },
                },
            },
        };
    }

    setOnNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                });
            }
        }
    };

    placeNameChangedGandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(val, prevState.controls.placeName.validationRules),
                        touched: true,
                    },
                },
            };
        });
    };

    placeAddedHandler = () => {
        if (this.state.controls.placeName.value.trim() !== '')
            this.props.onPlaceAdded(this.state.controls.placeName.value);
    };

    render() {
        return (
            <KeyboardAwareScrollView extraHeight={150} enableOnAndroid={true} scrollEnabled={true}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput placeData={this.state.controls.placeName} onChangeText={this.placeNameChangedGandler} />
                    <View style={styles.button}>
                        <Button
                            onPress={this.placeAddedHandler}
                            disabled={!this.state.controls.placeName.valid}
                            title="Share the Place"
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150,
    },
    button: {
        margin: 8,
    },
    previewImage: {
        width: '100%',
        height: '100%',
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onPlaceAdded: placeName => dispatch(addPlace(placeName)),
    };
};

export default connect(
    null,
    mapDispatchToProps,
)(SharePlaceScreen);
