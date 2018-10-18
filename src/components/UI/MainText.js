import React from 'react';
import { StyleSheet, Text } from 'react-native';

const mainText = props => (
    <Text {...props} style={[styles.mainText, props.style]}>
        {props.children}
    </Text>
);
const styles = StyleSheet.create({
    mainText: {
        color: '#bbb',
        backgroundColor: 'transparent',
    },
});

export default mainText;
