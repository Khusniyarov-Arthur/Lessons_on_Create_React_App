import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsing} from './postAction';

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
    // postRequest: (state) => {
    //   state.error = '';
    //   state.loading = true;
    // },
    // postRequestSuccess: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload.data;
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.isLast = !action.payload.after;
    // },
    // postRequestError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    // },

    // changePage: (state, action) => {
    //   state.page = action.payload.page;
    //   state.after = '';
    //   state.isLast = false;
    // },

    // postRequestSuccessAfter: (state, action) => {
    //   state.loading = false;
    //   state.data = [...state.data, ...action.payload.data];
    //   state.error = '';
    //   state.after = action.payload.after;
    // }
  },
  extraReducers: {
    [postRequestAsing.pending.type]: (state) => {
      state.error = '';
      state.loading = true;
    },

    [postRequestAsing.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.page = action.payload.page;
    },

    // [postRequestAsing.fulfilled.type]: (state, action) => {
    //   state.loading = false;
    //   state.data = [...state.data, ...action.payload.data];
    //   state.error = '';
    //   state.after = action.payload.after;
    // },

    [postRequestAsing.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  },
});

export default postSlice.reducer;
