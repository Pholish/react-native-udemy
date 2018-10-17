import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends React.Component {
    render() {
        const {
            placeNameChangedHandler,
            placeSubmitHandler,
            placeName,
        } = this.props;
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    onChangeText={placeNameChangedHandler}
                    value={placeName}
                />
                <Button
                    title="Add"
                    onPress={placeSubmitHandler}
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
