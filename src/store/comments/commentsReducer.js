import { v4 as generateId } from 'uuid';

import {
  SET_COMMENTS,ADD_COMMENT,DELETE_COMMENT
} from './commentsTypes';

const initialState = [];


export const commentsReducer =(state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return [...action.payload]
    case ADD_COMMENT:
      return [...state, action.payload]
    // case DELETE_PRODUCT:
    //   return state.filter(product => product._id !== action.payload)
    default:
      break
  }
  return state;
};

