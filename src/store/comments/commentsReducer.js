import { SET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './commentsTypes';

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return [...action.payload];
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id);
    default:
      break;
  }
  return state;
};
