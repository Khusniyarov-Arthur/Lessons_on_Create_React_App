import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
