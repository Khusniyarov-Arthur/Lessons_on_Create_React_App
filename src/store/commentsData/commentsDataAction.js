import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
// import {commentsSlice} from './commentsSlice';


// export const commentsDataRequestAsing2 = (id) => (dispatch, getState) => {
//   const token = getState().tokenReducer.token;
//   if (!token) return;
//   dispatch(commentsSlice.actions.commentsDataRequest());
//   axios(`${URL_API}/comme9nts/${id}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then((posts) => {
//       return posts;
//     })
//     .then(({data:
//       [
//         {
//           data: {
//             children: [
//               {
//                 data: {
//                   author: authorData,
//                   title: titleData,
//                   created: createdData,
//                   selftext: selftextData,
//                 }
//               }
//             ]
//           }
//         },
//         {
//           data: {
//             children: childrenData,
//           }
//         },
//       ]}) => {
//       const dataComments = childrenData.map((item) => item.data);
//       dataComments.splice(dataComments.length - 1, dataComments.length);
//       const dataPost = {authorData, titleData, createdData, selftextData};
//       return (
//         dispatch(commentsSlice.actions.commentsDataRequestSuccess({dataComments, dataPost}))
//       );
//     })
//     .catch(error => {
//       dispatch(commentsSlice.actions.commentsDataRequestError(error.toString()));
//     });
// };

export const commentsDataRequestAsing = createAsyncThunk(
  'comments/feth',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;
    // dispatch(commentsSlice.actions.commentsDataRequest());
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((posts) => {
        return posts;
      })
      .then(({data:
        [
          {
            data: {
              children: [
                {
                  data: {
                    author: authorData,
                    title: titleData,
                    created: createdData,
                    selftext: selftextData,
                  }
                }
              ]
            }
          },
          {
            data: {
              children: childrenData,
            }
          },
        ]}) => {
        const dataComments = childrenData.map((item) => item.data);
        dataComments.splice(dataComments.length - 1, dataComments.length);
        const dataPost = {authorData, titleData, createdData, selftextData};
        // return (
        //   dispatch(commentsSlice.actions.commentsDataRequestSuccess({dataComments, dataPost}))
        // );
        return {dataComments, dataPost};
      })
      // .catch(error => {
      //   dispatch(commentsSlice.actions.commentsDataRequestError(error.toString()));
      // });
      .catch(error => ({error: error.toString()}));
  },
);
