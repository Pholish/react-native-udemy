import { createStore, combineReducers, compose } from 'redux';
import reducer from './reducers/places';

const rootReducer = combineReducers({ places: reducer });

let composeEnchancers = compose;

if (__DEV__) {
    composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnchancers());
};

export default configureStore;
