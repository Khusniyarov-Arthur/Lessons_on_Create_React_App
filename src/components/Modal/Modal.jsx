import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import {Text} from '../../UI/Text';

export const Modal = ({closeModal, id}) => {
  const {commentsData, status, dataPost, error} = useCommentsData({id});

  const {
    authorData,
    titleData,
    selftextData,
    // lengthComments,
    // commentMessageData,
  } = dataPost;
  console.log(status);

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);
  // if (status === 'error') {
  //   return <div>Ошибка: {error.message}</div>;
  // }

  // if (status === 'loading') {
  //   return <div>Загрузка...</div>;
  // }

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'error' && <div>{error.message}</div>}
        {status === 'loading' && <div>Загрузка...</div>}
        {status === 'loaded' && <>
          <h2 className={style.title}>{titleData}</h2>
          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank'
                  },
                },
              },
            }}>
              {selftextData}
            </Markdown>
          </div>
          <p className={style.author}>{authorData}</p>
          <FormComment />
          {(commentsData.length > 0) && (commentsData.map((item) => (
            <Comments key={item.id} messageData={item} />
          )))}
          {(commentsData.length === 0) &&
          <Text center As='h3'>Нет комментариев</Text>
          }
          <button className={style.close}
            onClick={() => closeModal()}
          >
            <CloseIcon />
          </button>
        </>}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
