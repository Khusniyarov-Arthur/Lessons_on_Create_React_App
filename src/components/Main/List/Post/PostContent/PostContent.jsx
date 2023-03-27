import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
// import {useState} from 'react';
// import Modal from '../../../../Modal';
import {Link, useParams} from 'react-router-dom';

// export const PostContent = ({content, markdown, id}) => {
export const PostContent = ({content, id}) => {
  const [title, author] = content;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const {page} = useParams();
  return (
    <Text As='div' className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold size={14} tsize={14} className={style.linkPost}
            // onClick={() => setIsModalOpen(true)}
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
      {/* {isModalOpen && (
        <Modal
          markdown={markdown}
          title={title}
          author={author}
          id={id}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )} */}
    </Text>
  );
};

PostContent.propTypes = {
  content: PropTypes.array,
  // markdown: PropTypes.string,
  id: PropTypes.string,
};
// проверяем тип полученного пропса, в данном случае мы в просп принимаем массив
