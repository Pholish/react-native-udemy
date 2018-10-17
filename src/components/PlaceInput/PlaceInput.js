import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends React.Component {
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
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        const { placeName } = this.state;
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    onChangeText={this.placeNameChangedHandler}
                    value={placeName}
                />
                <Button
                    title="Add"
                    onPress={this.placeSubmitHandler}
                    style={styles.placeButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default PlaceInput;
