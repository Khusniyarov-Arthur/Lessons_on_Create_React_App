import {SEARCH_REQUEST, SEARCH_REQUEST_ERROR, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_CLEANER} from './searchAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.data,
        after: action.after,
      };

    case SEARCH_REQUEST_CLEANER:
      return {
        ...state,
        loading: false,
        error: '',
        data: [],
        after: '',
      };

    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
