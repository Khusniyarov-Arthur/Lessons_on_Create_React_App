import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(true);
  const [status, setStatus] = useState('');

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

  useEffect(() => {
    if (status === 401) {
      delToken();
    }
  });

  return (
    <div className={style.container} >
      {auth.name ?
      (<>
        <Text As='button' onClick={() => setLogout(!logout)} className={style.btn}>
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
        </Text>
        {logout ? (<Text size={12} className={style.authName}>{auth.name}</Text>) :
        (<Text As='button' onClick={delToken} color={'white'} className={style.logout}>Выйти</Text>)}
      </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} width="128" height="128"/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
