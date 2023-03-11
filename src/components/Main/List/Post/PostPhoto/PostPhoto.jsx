import style from './PostPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const PostPhoto = ({titelPhoto}) => {
  return (
    <img className={style.img} src={notphoto} alt={titelPhoto} />
  );
};

PostPhoto.propTypes = {
  titelPhoto: PropTypes.string,
};
