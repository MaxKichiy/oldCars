import * as actionTypes from './commonTypes';

export const setIsLoading = data => {
  return {
    type: actionTypes.SET_IS_LOADING,
    payload: data,
  };
};
