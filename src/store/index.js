import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import {commentsDataReducer} from './commentsData/commentsDataReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postReducer,
  commentsDataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
