import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
    addPlace,
    deletePlace,
    selectPlace,
    deselectPlace,
} from './src/store/actions/index';

import ListItems from './src/components/ListItems/ListItems';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: '',
        };
    }

    placeNameChangedHandler = e => {
        this.setState({ placeName: e });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.onAddPlace(this.state.placeName);
    };

    onItemSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };

    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    onModalClosed={this.modalClosedHandler}
                    onItemDeleted={this.placeDeletedHandler}
                    selectedPlace={this.props.selectedPlace}
                />
                <PlaceInput
                    placeNameChangedHandler={this.placeNameChangedHandler}
                    placeSubmitHandler={this.placeSubmitHandler}
                    placeName={this.state.placeName}
                />
                <ListItems
                    onItemSelected={this.onItemSelectedHandler}
                    places={this.props.places}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
});

const mapStateToProps = state => {
    console.log(state);
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: name => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: key => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
