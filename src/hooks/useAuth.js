import {useEffect} from 'react';
// import {tokenContext} from '../context/tokenContext';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, authRequestAsing} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.authReduser.data);
  // const [auth, setAuth] = useState({});
  // const [status, setStatus] = useState('');********
  // const {token} = useContext(tokenContext);
  const loading = useSelector(state => state.authReduser.loading);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!token) return;
    // dispatch(authRequest());
    // axios(`${URL_API}/api/v1/me`, {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // })
    //   // .then((response) => {
    //   //   setStatus(response.status);
    //   //   return response.json();
    //   // })
    //   .then((data) => {
    //     setStatus(data.status);
    //     return data;
    //   })
    //   .then(({data: {name, icon_img: iconImg}}) => {
    //     const img = iconImg.replace(/\?.*$/, '');
    //     const data = {name, img};
    //     // setAuth(data);
    //     dispatch(authRequestSuccess(data));
    //   })
    //   .catch(err => {
    //     // console.error(err);
    //     setStatus(err.response.status);
    //     // setAuth({});
    //     dispatch(authRequestError(err.toString()));
    //   });
    dispatch(authRequestAsing());
  }, [token]);
  const clearAuth = () => dispatch(authLogout());
  console.log(status);
  return {auth, loading, clearAuth};
};
