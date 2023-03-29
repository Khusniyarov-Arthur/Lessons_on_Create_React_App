import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {updateToken} from '../../../store/tokenReducer';
import {AuthLoader} from '../../../UI/Loader/authLoader';

export const Auth = () => {
  const [logout, setLogout] = useState(true);
  const {auth, loading, clearAuth, error} = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.statusNum === 401) {
      dispatch(deleteToken());
    }
  });

  useEffect(() => {
    if (localStorage.getItem('bearer')) {
      dispatch(updateToken(localStorage.getItem('bearer')));
    }
  }, []);

  return (
    <div className={style.container} >
      {loading ? (
        <AuthLoader />
        ) : auth.name ?
      (<>
        <Text As='button' onClick={() => setLogout(!logout)} className={style.btn}>
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
        </Text>
        {logout ? (<Text size={12} className={style.authName}>{auth.name}</Text>) :
        (<Text As='button'
          onClick={
            (e) => {
              e.preventDefault();
              dispatch(deleteToken());
              clearAuth();
            }
          } color={'white'} className={style.logout}>Выйти</Text>)}
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
