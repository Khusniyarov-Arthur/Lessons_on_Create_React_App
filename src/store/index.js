// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
// import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import postReducer from './post/postSlice';
// import {postReducer} from './post/postReducer';

import commentsDataReducer from './commentsData/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postReducer,
    commentsDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
});

// const rootReducer = combineReducers({
//   tokenReducer,
//   commentReducer,
//   authReducer,
//   postReducer,
//   commentsDataReducer,
// });

// export const storeOld = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
