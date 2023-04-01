import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsing} from './commentsDataAction';

const initialState = {
  loading: false,
  dataComments: [],
  dataPost: {},
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // commentsDataRequest: (state) => {
    //   state.error = '';
    //   state.status = 'loading';
    //   state.loading = true;
    // },

    // commentsDataRequestSuccess: (state, action) => {
    //   state.loading = false;
    //   state.dataComments = action.payload.dataComments;
    //   state.dataPost = action.payload.dataPost;
    //   state.error = '';
    //   state.status = 'loaded';
    // },
    // commentsDataRequestError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    //   state.status = 'error';
    // }
  },
  extraReducers: {
    [commentsDataRequestAsing.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.loading = true;
    },

    [commentsDataRequestAsing.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.dataComments = action.payload.dataComments;
      state.dataPost = action.payload.dataPost;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsDataRequestAsing.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.status = 'error';
    }
  },
});

export default commentsSlice.reducer;
