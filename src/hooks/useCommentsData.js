import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsDataRequestAsing} from '../store/commentsData/commentsDataAction';
export const useCommentsData = ({id}) => {
  const commentsData = useSelector(state => state.commentsDataReducer.dataComments);
  const status = useSelector(state => state.commentsDataReducer.status);
  const dataPost = useSelector(state => state.commentsDataReducer.dataPost);
  const error = useSelector(state => state.commentsDataReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsing(id));
  }, [id]);
  return {commentsData, dataPost, status, error};
};
