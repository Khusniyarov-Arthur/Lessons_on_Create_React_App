import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
// import {tokenContext} from '../context/tokenContext';
import {useSelector, useDispatch} from 'react-redux';
import {authRequest, authRequestError, authRequestSuccess} from '../store/auth/action';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const [status, setStatus] = useState('');
  // const {token} = useContext(tokenContext);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authRequest());
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      setStatus(response.status);
      return response.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        setAuth(data);
        dispatch(authRequestSuccess(data));
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(authRequestError(err));
      });
  }, [token]);
  const clearAuth = () => setAuth({});

  return {auth, status, clearAuth};
};

// 10 MIN
