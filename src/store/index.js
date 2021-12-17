import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/RootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

let middleware = [];

if (process.env.REACT_APP_ENV === 'production') {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk, logger];
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

export default store;
