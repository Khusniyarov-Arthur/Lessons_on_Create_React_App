import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsing} from './postAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {},
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

    [postRequestAsing.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  },
});

export default postSlice.reducer;
