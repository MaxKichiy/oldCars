import * as actionTypes from './productsTypes';
import axios from 'axios';


const baseURL = 'https://dummy-hooks.firebaseio.com/'

const setProducts = (data) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: data,
  }
}

export const fetchingProducts = () => async (dispatch) => {
  axios.get(baseURL + '/oldCars.json').then(({ data }) => dispatch(setProducts(data)))
    .catch((err) => alert('Some erros'));
};