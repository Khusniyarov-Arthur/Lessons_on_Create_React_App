import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsing = createAsyncThunk(
  'post/feth',
  (newPage, {getState}) => {
    let page = getState().postReducer.page;

    if (newPage) {
      page = newPage;
    }
    const token = getState().tokenReducer.token;
    const after = getState().postReducer.after;
    const loading = getState().postReducer.loading;
    const isLast = getState().postReducer.isLast;
    const oldPosts = getState().postReducer.data;

    if (!token || !loading || isLast) return;

    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((posts) => {
        console.log(posts.status);
        return posts;
      })
      .then((posts) => {
        if (after && !newPage) {
          return {data: [...oldPosts, ...posts.data.data.children], after: posts.data.data.after, page};
        } else if (posts.data.data.children.length === 0) {
          return {data: [], after: true, page};
        } else {
          return {data: posts.data.data.children, after: posts.data.data.after, page};
        }
      })
      .catch(error => {
        return {error: error.toString()};
      });
  }
);

