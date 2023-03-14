import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const [status, setStatus] = useState('');
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      setStatus(response.status);
      console.log(response.status);
      return response.json();
    })
      .then(({name, icon_img: iconImg, id}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);
  const clearAuth = () => setAuth({});

  return {auth, status, clearAuth};
};

