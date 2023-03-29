import style from './Comments.module.css';
import {Text} from '../../../UI/Text';
import {PostDate} from '../../Main/List/Post/PostDate/PostDate';
import PropTypes from 'prop-types';


export const Comments = ({messageData}) => {
  const {
    body,
    author,
    created,
  } = messageData;

  return (
    <Text As='div' >
      <Text As='ul' className={style.list}>
        <Text As='li'>
          <Text As='h3' className={style.author} size={18} tsize={22}>{author}</Text>
          <Text As='p' className={style.comment} size={14} tsize={18}>{body}</Text>
          <PostDate date={created} />
        </Text>
      </Text>
    </Text>
  );
};

Comments.propTypes = {
  body: PropTypes.string,
  author: PropTypes.string,
  created: PropTypes.number,
  messageData: PropTypes.object,
};

