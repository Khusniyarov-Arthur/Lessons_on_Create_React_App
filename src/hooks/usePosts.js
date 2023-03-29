import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {postRequestAsing} from '../store/post/postAction';

export const usePosts = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsing());
  }, [token]);
  return [posts];
};
