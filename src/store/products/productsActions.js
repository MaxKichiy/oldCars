import * as actionTypes from './productsTypes';
import axios from 'axios';
import { fetchRemoveComment } from 'store/comments/commentsActions';

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

// export const getContacts = (data) => {
//   return {
//     type: actionTypes.DELETE_PRODUCT,
//     payload: data,
//   }
// }

export const fetchingProducts = () => async dispatch => {
  axios
    .get(baseURL + '/oldCars.json')
    .then(({ data }) => dispatch(setProducts(data)))
    .catch(err => alert('Some erros'));
};

export const deleteProduct = id => async dispatch => {
  const { data } = await axios.get(baseURL + `/oldCars.json?orderBy="_id"&equalTo="${id}"`);
  const objectKey = Object.keys(data)[0];
  const commentList = Object.values(data)[0].comments;
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

  // axios.get(baseURL + `/oldCars.json?orderBy="_id"&equalTo="${id}"`).then(({data}) => {
  //   const commentsList = Object.values(data)[0].comments
  //   commentsList.forEach(comment => {
  //   fetchRemoveComment(comment)
  //   });
  //  }).then((response)=> console.log(response)).catch(err =>  alert('Some erros'))
  //  }).then((response)=> dispatch(deleteItem(id))).catch(err =>  alert('Some erros'))
  // return  axios.delete(baseURL + `/oldCarsComments/${Object.keys(data)[0]}.json`)
};
