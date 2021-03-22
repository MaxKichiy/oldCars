import { SET_IS_LOADING } from './commonTypes';

const initialState = {
  isLoading: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      break;
  }
  return state;
};
