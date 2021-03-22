import { v4 as generateId } from 'uuid';

import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SET_PRODUCTS } from './productsTypes';
import { ADD_COMMENT, DELETE_COMMENT } from '../comments/commentsTypes';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload].filter(el => el !== null);
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.payload);
    case ADD_COMMENT:
      const product = state.find(el => el._id === action.payload.productId);
      product.comments.push(action.payload.id);
      return state;
    case DELETE_COMMENT:
      const prod = state.find(el => el._id === action.payload.prodId);
      const filtered = prod.comments.filter(comment => comment !== action.payload.id);
      prod.comments = filtered;
      return state;
    case EDIT_PRODUCT:
      const prodIndex = state.findIndex(product => product._id === action.payload._id);
      state[prodIndex] = action.payload;
      return state;
    default:
      break;
  }
  return state;
};
