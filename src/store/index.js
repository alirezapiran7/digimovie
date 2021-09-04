import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import auth from './auth/reducer';

const rootReducer = combineReducers({
    auth,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
);

export default store;
