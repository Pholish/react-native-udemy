import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class ListItem extends React.Component {
    render() {
        const { placeName, placeImage, onItemPressed } = this.props;
        return (
            <TouchableOpacity onPress={onItemPressed}>
                <View style={styles.listItem}>
                    <Image
                        resizeMode="cover"
                        style={styles.placeImage}
                        source={placeImage}
                    />
                    <Text>{placeName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeImage: {
        marginRight: 9,
        height: 30,
        width: 30,
    },
});

export default ListItem;
