import axios from 'axios';
import {URL_API} from '../../api/const';


export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data: data.data.data.children,
  after: data.data.data.after
});

export const postRequestSuccessAfter = (data) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  data: data.data.data.children,
  after: data.data.data.after
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postRequestAsing = (newPage) => (dispatch, getState) => {
  let page = getState().postReducer.page;

  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().postReducer.after;
  const loading = getState().postReducer.loading;
  const isLast = getState().postReducer.isLast;


  if (!token || loading || isLast) return;
  dispatch(postRequest());
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((posts) => {
      return posts;
    })
    .then((posts) => {
      if (after) {
        dispatch(postRequestSuccessAfter(posts));
      } else {
        dispatch(postRequestSuccess(posts));
      }
    })
    .catch(err => {
      dispatch(postRequestError(err.toString()));
    });
};
