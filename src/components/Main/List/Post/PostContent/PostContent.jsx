import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const PostContent = ({content, id}) => {
  const [title, author] = content;
  const {page} = useParams();
  return (
    <Text As='div' className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold size={14} tsize={14} className={style.linkPost}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </Text>
  );
};

PostContent.propTypes = {
  content: PropTypes.array,
  id: PropTypes.string,
};
