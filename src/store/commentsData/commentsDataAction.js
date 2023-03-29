import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_DATA_REQUEST = 'COMMENTS_DATA_REQUEST';
export const COMMENTS_DATA_SUCCESS = 'COMMENTS_DATA_SUCCESS';
export const COMMENTS_DATA_ERROR = 'COMMENTS_DATA_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTS_DATA_REQUEST,
});

export const commentsDataRequestSuccess = (dataComments, dataPost) => ({
  type: COMMENTS_DATA_SUCCESS,
  dataComments,
  dataPost
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTS_DATA_ERROR,
  error,
});

export const commentsDataRequestAsing = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(commentsDataRequest());
  axios(`${URL_API}/comments/${id}`, {
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
      return (
        dispatch(commentsDataRequestSuccess(dataComments, dataPost))
      );
    })
    .catch(err => {
      dispatch(commentsDataRequestError(err.toString()));
    });
};
