import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName,
                    key: Math.random(),
                    image: {
                        uri:
                            'https://www.reebok.ru/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwa88c42c7/zoom/2214_01_standard.jpg?sw=2000',
                    },
                }),
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(
                    place => place.key !== state.selectedPlace.key,
                ),
            };

        default:
            return state;
    }
};

export default reducer;
