import React from 'react';
import DefaulInput from '../UI/DefaultInput';
const placeInput = props => (
    <DefaulInput
        value={props.placeName}
        onChangeText={props.onChangeText}
        placeholder="Place Name"
    />
);
export default placeInput;
