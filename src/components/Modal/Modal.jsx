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
import {ModalLoader} from '../../UI/Loader/modalLoader';

export const Modal = ({closeModal, id}) => {
  const {commentsData, status, dataPost, error} = useCommentsData({id});

  const {
    authorData,
    titleData,
    selftextData,
  } = dataPost;

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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'error' && <div>{error}</div>}
        {status === 'loading' &&
            <Text As='div' className={style.load}>
              <Text As='h2' center>Загрузка</Text>
              <ModalLoader />
            </Text>}
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
