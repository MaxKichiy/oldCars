import { v4 as generateId } from 'uuid';

import {
  ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT,SET_PRODUCTS
} from './productsTypes';

const initialState = {
  data: 'fguck'
};


export const productsReducer =(state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state,...action.payload}
    default:
      break
  }
  return state;
};

