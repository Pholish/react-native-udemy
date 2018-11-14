import React from 'react';
import DefaulInput from '../UI/DefaultInput';
const placeInput = props => (
    <DefaulInput
        placeholder="Place Name"
        value={props.placeData.value}
        valid={props.placeData.valid}
        touched={props.placeData.touched}
        onChangeText={props.onChangeText}
    />
);
export default placeInput;
