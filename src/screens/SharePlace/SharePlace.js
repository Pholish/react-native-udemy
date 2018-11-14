import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: 'pink',
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);
        this.state = {
            placeName: '',
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
        this.setState({ placeName: val });
    };

    placeAddedHandler = placeName => {
        if (this.state.placeName.trim() !== '') this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedGandler} />
                    <View style={styles.button}>
                        <Button onPress={this.placeAddedHandler} title="Share the Place" />
                    </View>
                </View>
            </ScrollView>
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
