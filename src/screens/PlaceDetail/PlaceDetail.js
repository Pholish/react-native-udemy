import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';
class PlaceDetail extends Component {
    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.updateStyles);
        this.state = {
            viewMode: 'portrait',
        };
    }

    componentWillUnmount = () => {
        Dimensions.removeEventListener('change', this.updateStyles);
    };

    updateStyles = dims => {
        this.setState({ viewMode: dims.window.height > 500 ? 'portrait' : 'landscape' });
    };

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop({
            animated: true,
        });
    };
    render() {
        const { selectedPlace } = this.props;
        return (
            <ScrollView>
                <View
                    style={[
                        styles.contaier,
                        this.state.viewMode === 'portrait' ? styles.portraitContainer : styles.landscapeContainer,
                    ]}>
                    <View style={styles.subContainer}>
                        <Image style={styles.placeImage} source={selectedPlace.image} />
                    </View>
                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.placeName}>{selectedPlace.name}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.placeDeletedHandler}>
                                <View style={styles.deleteButton}>
                                    <Icon
                                        size={30}
                                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                                        color="red"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contaier: {
        margin: 22,
        flex: 1,
    },
    portraitContainer: {
        flexDirection: 'column',
    },
    landscapeContainer: {
        flexDirection: 'row',
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
    subContainer: {
        flex: 1,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key)),
    };
};

export default connect(
    null,
    mapDispatchToProps,
)(PlaceDetail);
