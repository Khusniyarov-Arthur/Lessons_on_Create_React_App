import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostDate} from './PostDate/PostDate';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostPhoto} from './PostPhoto/PostPhoto';
import {PostDelete} from './PostDelete/PostDelete';

export const Post = ({postData}) => {
  const {ups, title, author, created} = postData;

  return (
    <li className={style.post}>
      <PostPhoto titelPhoto={title} />
      <PostContent content={[title, author]} />
      <PostRating ups={ups} />
      <PostDate date={created} />
      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
