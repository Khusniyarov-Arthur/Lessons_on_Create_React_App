import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import postReducer from './post/postSlice';
import commentsDataReducer from './commentsData/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga.js';
import {searchReducer} from './search/searchReducer.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postReducer,
    commentsDataReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
