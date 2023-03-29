import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, authRequestAsing} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.authReducer.data);
  const loading = useSelector(state => state.authReducer.loading);
  const error = useSelector(state => state.authReducer.error);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsing());
  }, [token]);
  const clearAuth = () => dispatch(authLogout());
  return {auth, loading, clearAuth, error};
};
