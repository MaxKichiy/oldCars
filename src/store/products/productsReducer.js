import { v4 as generateId } from 'uuid';

import {
  ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT,SET_PRODUCTS
} from './productsTypes';

const initialState = [];


export const productsReducer =(state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload]
    case DELETE_PRODUCT:
      return state.filter(product => product._id !== action.payload)
    default:
      break
  }
  return state;
};

