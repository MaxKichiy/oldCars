import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { productsReducer } from './products/productsReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;

const store = createStore(
  combineReducers({
    products:productsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store