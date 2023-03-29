import style from './Home.module.css';
import {Text} from '../../UI/Text';
export const Home = () => {
  console.log(style);
  return (
    <Text As='div'>
      <Text As='h1' className={style.home_wrap} center bold >Стартовая страница</Text>
      <Text As='div' className={style.home_titil} size={24} tsize={26} center >Добро пожаловать!</Text>
      <Text As='div' className={style.home_titil} size={24} tsize={26} center >Выберите категорию</Text>
    </Text>
  );
};
