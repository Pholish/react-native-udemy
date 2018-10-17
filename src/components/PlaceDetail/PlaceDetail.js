import React, { Component } from 'react';
import {
    Modal,
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class PlaceDetail extends Component {
    render() {
        const { selectedPlace, onItemDeleted, onModalClosed } = this.props;
        let modalContent = null;
        if (selectedPlace)
            modalContent = (
                <View>
                    <Image
                        style={styles.placeImage}
                        source={selectedPlace.image}
                    />
                    <Text style={styles.placeName}>{selectedPlace.name}</Text>
                </View>
            );
        return (
            <Modal
                onRequestClose={onModalClosed}
                visible={selectedPlace !== null}
                animationType="slide">
                <View style={styles.modalContaier}>
                    {modalContent}
                    <View>
                        <TouchableOpacity onPress={onItemDeleted}>
                            <View style={styles.deleteButton}>
                                <Icon size={30} name="ios-trash" color="red" />
                            </View>
                        </TouchableOpacity>
                        <Button title="Close" onPress={onModalClosed} />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContaier: {
        margin: 22,
    },
    placeImage: {
        width: '100%',
        height: 200,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
    },
    deleteButton: {
        alignItems: 'center',
    },
});

export default PlaceDetail;
