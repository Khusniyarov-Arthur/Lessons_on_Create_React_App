import {COMMENTS_DATA_REQUEST, COMMENTS_DATA_SUCCESS, COMMENTS_DATA_ERROR} from './commentsDataAction';

const initialState = {
  loading: false,
  dataComments: [],
  dataPost: {},
  status: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        status: 'loading',
      };
    case COMMENTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataComments: action.dataComments,
        dataPost: action.dataPost,
        error: '',
        status: 'loaded',
      };
    case COMMENTS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
      };
    default:
      return state;
  }
};
