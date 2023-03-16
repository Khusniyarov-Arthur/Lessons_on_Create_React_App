import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostDate} from './PostDate/PostDate';
import {PostRating} from './PostRating/PostRating';
import {PostContent} from './PostContent/PostContent';
import {PostPhoto} from './PostPhoto/PostPhoto';
import {PostDelete} from './PostDelete/PostDelete';

export const Post = ({postData}) => {
  const {
    thumbnail,
    ups,
    title,
    author,
    created,
    selftext: markdown,
  } = postData;

  return (
    <li className={style.post}>
      <PostPhoto thumbnail={thumbnail} />
      <PostContent content={[title, author]} markdown={markdown} />
      <PostRating ups={ups} />
      <PostDate date={created} />
      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
