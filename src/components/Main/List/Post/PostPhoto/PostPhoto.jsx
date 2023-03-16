import style from './PostPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const PostPhoto = ({thumbnail}) => {
  return (
    <img className={style.img} src={(thumbnail.substring(0, 4) === 'http') ? thumbnail : notphoto} alt={thumbnail} />
  );
};

PostPhoto.propTypes = {
  thumbnail: PropTypes.string,
};
