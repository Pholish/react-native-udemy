import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';
class ListItems extends React.Component {
    render() {
        const { places, onItemSelected } = this.props;
        return (
            <FlatList
                data={places}
                renderItem={info => (
                    <ListItem
                        onItemPressed={() => onItemSelected(info.item.key)}
                        placeName={info.item.name}
                        placeImage={info.item.image}
                    />
                )}
                keyExtractor={item => item.key.toString()}
                style={styles.ListContainer}
            />
        );
    }
}

const styles = StyleSheet.create({
    ListContainer: {
        width: '100%',
    },
});

export default ListItems;
