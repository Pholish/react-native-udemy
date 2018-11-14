import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import ListItems from '../../components/ListItems/ListItems';
class FindPlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: 'pink',
    };
    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        placesAnim: new Animated.Value(0),
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);
    }
    placesLoaded = () => {
        Animated.timing(this.state.placesAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            this.setState({
                placesLoaded: true,
            });
            this.placesLoaded();
        });
    };

    setOnNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                });
            }
        }
    };

    itemSelectedHandler = key => {
        const place = this.props.places.find(place => place.key === key);
        this.props.navigator.push({
            screen: 'awesome-places.PlaceDetailScreen',
            title: place.name,
            passProps: {
                selectedPlace: place,
            },
        });
    };
    render() {
        const { placesLoaded, placesAnim, removeAnim } = this.state;
        let content = (
            <Animated.View
                style={{
                    opacity: removeAnim,
                    transform: [
                        {
                            scale: removeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [12, 1],
                            }),
                        },
                    ],
                }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
        if (placesLoaded) {
            content = (
                <Animated.View
                    style={{
                        opacity: placesAnim,
                    }}>
                    <View>
                        <ListItems places={this.props.places} onItemSelected={this.itemSelectedHandler} />
                    </View>
                </Animated.View>
            );
        }
        return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>;
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButton: {
        borderColor: 'orange',
        borderWidth: 3,
        borderRadius: 50,
        padding: 20,
    },
    searchButtonText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 26,
    },
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
