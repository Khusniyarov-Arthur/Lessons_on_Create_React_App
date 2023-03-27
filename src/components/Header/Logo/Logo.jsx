import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';
import {Link} from 'react-router-dom';
import {Text} from '../../../UI/Text';

export const Logo = () => {
  return (
    <>
      <Link className={style.link} to={`/`}>
        <Text className={style.link}>
          <LogoIcon className={style.logo} alt="Логотип Blogget"/>
        </Text>
      </Link>
    </>
  );
};
