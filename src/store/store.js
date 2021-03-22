import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { commentsReducer } from './comments/commentsReducer';
import { commonReducer } from './common/commonReducer';
import { productsReducer } from './products/productsReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : null;

const store = createStore(
  combineReducers({
    products: productsReducer,
    comments: commentsReducer,
    common: commonReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
