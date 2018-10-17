import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
class SharePlaceScreen extends Component {
    placeAddedHandler = placeName => {
        this.props.onPlaceAdded(placeName);
    };

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPlaceAdded: placeName => dispatch(addPlace(placeName)),
    };
};

export default connect(
    null,
    mapDispatchToProps,
)(SharePlaceScreen);
