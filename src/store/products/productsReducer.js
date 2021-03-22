import { v4 as generateId } from 'uuid';

import {
  ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT,SET_PRODUCTS,
} from './productsTypes';
import {
  ADD_COMMENT,
} from '../comments/commentsTypes';

const initialState = [];


export const productsReducer =(state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload].filter(el => el !== null)
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.payload)
    case ADD_COMMENT: 
    console.log('privet');
      const product = state.find(el => el.id === action.payload.productId)
      product.comments.push(action.payload)
      return [...state, product]
    default:
      break
  }
  return state;
};

