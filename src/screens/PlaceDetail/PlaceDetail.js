import React, { Component } from 'react';
import {
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
        return (
            <View style={styles.contaier}>
                <View>
                    <Image
                        style={styles.placeImage}
                        source={selectedPlace.image}
                    />
                    <Text style={styles.placeName}>{selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={onItemDeleted}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contaier: {
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
