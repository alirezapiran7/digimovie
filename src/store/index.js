import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import movie from './movie/reducer';
import auth from './auth/reducer';
import modal from './modal/reducer';

const rootReducer = combineReducers({
  movie,
  auth,
  modal
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
