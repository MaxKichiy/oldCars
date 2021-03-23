import * as actionTypes from './productsTypes';
import axios from 'axios';

const baseURL = 'https://dummy-hooks.firebaseio.com/';

const setProducts = data => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: data,
  };
};

const deleteItem = data => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload: data,
  };
};

const editItem = data => {
  return {
    type: actionTypes.EDIT_PRODUCT,
    payload: data,
  };
};

const addItem = data => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: data,
  };
};

export const fetchingProducts = () => dispatch => {
  axios
    .get(baseURL + '/oldCars.json')
    .then(({ data }) => dispatch(setProducts(Object.values(data))))
    .catch(err => alert('Some erros'));
};

export const deleteProduct = id => async dispatch => {
  const { data } = await axios.get(baseURL + `/oldCars.json?orderBy="_id"&equalTo="${id}"`);
  const objectKey = Object.keys(data)[0];
  const commentList = Object.values(data)[0].comments;
  commentList &&
    commentList.forEach(element => {
      axios
        .get(baseURL + `/oldCarsComments.json?orderBy="id"&equalTo="${element}"&print=pretty`)
        .then(({ data }) => {
          return axios.delete(baseURL + `/oldCarsComments/${Object.keys(data)[0]}.json`);
        })
        .then(response => axios.delete(baseURL + `/oldCars/${objectKey}.json`))
        .then(response => dispatch(deleteItem(id)))
        .catch(err => alert('Some erros'));
    });
};

export const fetchEditProduct = newProduct => dispatch => {
  dispatch(editItem(newProduct));
  axios
    .get(baseURL + `/oldCars.json?orderBy="_id"&equalTo="${newProduct._id}"`)
    .then(({ data }) => {
      return axios.put(baseURL + `oldCars/${Object.keys(data)[0]}.json`, newProduct);
    })
    .catch(err => alert('Some erros'));
};

export const fetchAddProduct = newProduct => dispatch => {
  axios
    .post(baseURL + `/oldCars.json`, newProduct)
    .then(({ data }) => {
      dispatch(addItem(newProduct));
    })
    .catch(err => alert('Some erros'));
};
