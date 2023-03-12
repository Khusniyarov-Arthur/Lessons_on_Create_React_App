import style from './PostRating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostRating = ({ups}) => {
  return (
    <Text As='div' center className={style.rating}>
      <Text As='button' className={style.up} aria-label='Повысть рейтинг' />
      <Text As='p' bold className={style.ups}>{ups}</Text>
      <Text As='button' className={style.down} aria-label='Понизить рейтин' />
    </Text>
  );
};

PostRating.propTypes = {
  ups: PropTypes.number,
};
