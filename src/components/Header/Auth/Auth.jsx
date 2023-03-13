import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    console.log('useEffect');
    if (!token) return;
    console.log('use');

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
        console.log('img: ', img);
        console.log('name: ', name);
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container} >
      {auth.name ?
      (<>
        <button className={style.btn}>
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
        </button>
        <Text>{auth.name}</Text>
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
};
