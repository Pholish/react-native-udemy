import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ListItems from '../../components/ListItems/ListItems';
class FindPlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent);
    }

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
        return (
            <View>
                <ListItems
                    places={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places,
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
