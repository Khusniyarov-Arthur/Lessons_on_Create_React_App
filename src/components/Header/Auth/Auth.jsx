import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => {
  return (
    <button className={style.button} >
      {auth ? auth :
        <LoginIcon className={style.svg} width="128" height="128"/>
      }
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.bool,
};
