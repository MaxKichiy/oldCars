import * as actionTypes from './commentsTypes';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { setIsLoading } from 'store/common/commonActions';

const baseURL = 'https://dummy-hooks.firebaseio.com/';

export const setComments = data => {
  return {
    type: actionTypes.SET_COMMENTS,
    payload: data,
  };
};
const addComment = data => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: data,
  };
};

const removeComment = (id, prodId) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    payload: { id, prodId },
  };
};

export const fetchingComments = id => dispatch => {
  dispatch(setIsLoading(true));
  axios
    .get(baseURL + `/oldCarsComments.json?orderBy="productId"&equalTo="${id}"&print=pretty`)
    .then(({ data }) => {
      dispatch(setComments(Object.values(data)));
      dispatch(setIsLoading(false));
    })
    .catch(err => alert('Some erros'));
};

export const fetchRemoveComment = (id, prodId) => dispatch => {
  dispatch(setIsLoading(true));
  axios
    .get(baseURL + `oldCarsComments.json?orderBy="id"&equalTo="${id}"&print=pretty`)
    .then(({ data }) => axios.delete(baseURL + `oldCarsComments/${Object.keys(data)[0]}.json`))
    .then(response => axios.get(baseURL + `oldCars.json?orderBy="_id"&equalTo="${prodId}"`))
    .then(({ data }) => {
      const newCommentList = Object.values(data)[0].comments.filter(comment => comment !== id);
      return axios.put(baseURL + `oldCars/${Object.keys(data)[0]}/comments.json`, newCommentList);
    })
    .then(response => {
      dispatch(setIsLoading(false));
      dispatch(removeComment(id, prodId));
    })
    .catch(err => alert('Some erros'));
};

export const addNewComment = (text, prodId) => async dispatch => {
  const newComment = {
    date: new Date(),
    description: text,
    id: uuidv4(),
    productId: prodId,
  };
  dispatch(setIsLoading(true));
  axios
    .post(baseURL + `/oldCarsComments.json`, newComment)
    .then(response => dispatch(addComment(newComment)))
    .then(response =>
      axios
        .get(baseURL + `/oldCars.json?orderBy="_id"&equalTo="${prodId}"`)
        .then(({ data }) => {
          const newArr = Object.values(data)[0].comments
            ? [...Object.values(data)[0].comments, newComment.id]
            : [newComment.id];
          dispatch(setIsLoading(false));
          return axios.put(baseURL + `oldCars/${Object.keys(data)[0]}/comments.json`, newArr);
        })
        .catch(err => alert('Some erros')),
    );
};
