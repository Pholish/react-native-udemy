import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import DefaulImport from '../../components/UI/DefaultInput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import ImagePlaceholder from '../../images/image.jpeg';

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);
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

    placeAddedHandler = placeName => {
        this.props.onPlaceAdded(placeName);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                    <View style={styles.placeholder}>
                        <Image
                            source={ImagePlaceholder}
                            style={styles.previewImage}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick Image" />
                    </View>
                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Locate Me" />
                    </View>
                    <DefaulImport placeholder="Place Name" />
                    <View style={styles.button}>
                        <Button title="Share the Place" />
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
