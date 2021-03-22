import * as actionTypes from './commentsTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const baseURL = 'https://dummy-hooks.firebaseio.com/'

const setComments = (data) => {
  return {
    type: actionTypes.SET_COMMENTS,
    payload: data,
  }
}
const addComment = (data) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: data,
  }
}

const removeComment = (data) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    payload: data,
  }
}

export const fetchingComments = (id) => async (dispatch) => {
  axios.get(baseURL + `/oldCarsComments.json?orderBy="productId"&equalTo="${id}"&print=pretty`).then(({data}) => {
    dispatch(setComments(Object.values(data)))
  })
    .catch((err) => alert('Some erros'));
};

export const fetchRemoveComment = (id) => async (dispatch) => {
  axios.get(baseURL + `/oldCarsComments.json?orderBy="id"&equalTo="${id}"&print=pretty`).then(({data}) => {
   return  axios.delete(baseURL + `/oldCarsComments/${Object.keys(data)[0]}.json`)
  }).then((response)=> dispatch(removeComment(id))).catch(err =>  alert('Some erros'))
};

export const addNewComment = (text, prodId) => async (dispatch) => {
  const newComment = {
    date: new Date(),
    description:text,
    id:uuidv4(),
    productId:prodId,
  }

  axios.post(baseURL + `/oldCarsComments.json`, newComment).then((response) => 
  dispatch(addComment(newComment)))
    .catch((err) => alert('Some erros'));
}

// export const deleteProducts = () => async (dispatch) => {
//   axios.get(baseURL + '/oldCars.json').then(({ data }) => dispatch(setProducts(data)))
//     .catch((err) => alert('Some erros'));
// };

