import {createSlice} from '@reduxjs/toolkit';
// import {postRequestAsing} from './postAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  jopa: 'jopa'
};


export const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.error = '';
      state.loading = true;
    },
    postRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    changePage: (state, action) => {
      // state.data = action.payload.data;
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },

    postRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload.data];
      state.error = '';
      state.after = action.payload.after;
    }
  },
  // extraReducers: {
  //   [postRequestAsing.pending]: (state) => {
  //     state.error = '';
  //     state.loading = true;
  //   },

  //   [postRequestAsing.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.data = action.payload.data;
  //     state.error = '';
  //     state.after = action.payload.after;
  //     state.isLast = !action.payload.after;
  //   },
  //   [postRequestAsing.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.error;
  //   }
  // },
});

export default postSlice.reducer;


// export const postReducer = (state = initialState, action) => {
//   switch (action.type) {
// case POST_REQUEST:
//   return {
//     ...state,
//     loading: true,
//     error: '',
//   };
// case POST_REQUEST_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     data: action.data,
//     error: '',
//     after: action.after,
//     isLast: !action.after,
//   };
// case POST_REQUEST_SUCCESS_AFTER:
//   return {
//     ...state,
//     loading: false,
//     data: [...state.data, ...action.data],
//     error: '',
//     after: action.after,
//   };
// case POST_REQUEST_ERROR:
//   return {
//     ...state,
//     loading: false,
//     error: action.error,
//   };
// case CHANGE_PAGE:
//   return {
//     ...state,
//     page: action.page,
//     after: '',
//     isLast: false,
//   };
//     default:
//       return state;
//   }
// };
