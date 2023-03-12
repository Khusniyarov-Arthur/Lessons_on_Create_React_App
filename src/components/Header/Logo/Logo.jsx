import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';


export const Logo = () => {
  return (
    <a className={style.link} href='/'>
      <LogoIcon className={style.logo} alt="Логотип Blogget"/>
    </a>);
};
