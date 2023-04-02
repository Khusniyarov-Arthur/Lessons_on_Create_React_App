import axios from 'axios';
import {URL_API} from '../../api/const';
// import {postSlice} from './postSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';


// export const postRequestAsing = (newPage) => (dispatch, getState) => {
//   let page = getState().postReducer.page;
//   console.log(newPage);
//   if (newPage) {
//     page = newPage;
//     dispatch(postSlice.actions.changePage({page}));
//     console.log('********************');
//   }
//   const token = getState().tokenReducer.token;
//   const after = getState().postReducer.after;
//   const loading = getState().postReducer.loading;
//   const isLast = getState().postReducer.isLast;


//   if (!token || loading || isLast) return;
//   dispatch(postSlice.actions.postRequest());
//   axios(`${URL_API}/${page}?limit=6&${after ? `after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then((posts) => {
//       return posts;
//     })
//     .then((posts) => {
//       if (after) {
//         dispatch(postSlice.actions.postRequestSuccessAfter({data: posts.data.data.children, after: posts.data.data.after}));
//       } else {
//         dispatch(postSlice.actions.postRequestSuccess({data: posts.data.data.children, after: posts.data.data.after}));
//       }
//     })
//     .catch(err => {
//       dispatch(postSlice.actions.postRequestError(err.toString()));
//     });
// };

export const postRequestAsing = createAsyncThunk(
  'post/feth',
  (newPage, {getState, dispatch}) => {
    let page = getState().postReducer.page;
    console.log('newPage=', newPage);
    console.log('page=', page);
    // if (newPage) {
    //   page = newPage;
    //   // dispatch(postSlice.actions.changePage({page}));
    // }
    if (page === newPage) {
      console.log(page, '=', newPage);
    } else {
      console.log(page, '=/=', newPage);
    }
    if (newPage) {
      page = newPage;
      // dispatch(postSlice.actions.changePage({page}));
    }
    const token = getState().tokenReducer.token;
    const after = getState().postReducer.after;
    const loading = getState().postReducer.loading;
    const isLast = getState().postReducer.isLast;
    const oldPosts = getState().postReducer.data;
    // console.log(oldPosts);

    if (!token || !loading || isLast) return;
    // console.log(page);
    // console.log('pageda2');

    // dispatch(postSlice.actions.postRequest());
    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((posts) => {
        console.log(page);
        return posts;
      })
      .then((posts) => {
        if (after && !newPage) {
          // dispatch(postSlice.actions.postRequestSuccessAfter({data: posts.data.data.children, after: posts.data.data.after}));
          // return {data: posts.data.data.children, after: posts.data.data.after};
          return {data: [...oldPosts, ...posts.data.data.children], after: posts.data.data.after, page};
        } else {
          // dispatch(postSlice.actions.postRequestSuccess({data: posts.data.data.children, after: posts.data.data.after}));

          return {data: posts.data.data.children, after: posts.data.data.after, page};
        }
      })
      .catch(err => {
        // dispatch(postSlice.actions.postRequestError(err.toString()));
      });
  }
);
