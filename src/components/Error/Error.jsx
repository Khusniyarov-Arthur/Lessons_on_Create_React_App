import {Text} from '../../UI/Text';
import style from './Error.module.css';

export const Error = () => {
  console.log(style);
  return (
    <Text As='div' center className={style.error}>404</Text>
  );
};
