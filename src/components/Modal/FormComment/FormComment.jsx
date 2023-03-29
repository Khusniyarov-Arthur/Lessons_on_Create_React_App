import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = () => {
  const textareaText = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  const {auth} = useAuth();
  const [addComment, setAddComment] = useState(false);

  const inputComment = e => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    document.addEventListener('input', inputComment);
    return () => {
      document.removeEventListener('input', inputComment);
    };
  }, []);

  return (
    <Text As='div'>
      {!addComment && <Text As='button' className={style.btnNewComment} onClick={() => setAddComment(true)}>Написать комментарий</Text>}

      {addComment && <Text As='form' className={style.form}>
        <Text As='h3' size={14} tsize={18} >{auth.name}</Text>
        <textarea
          value={textareaText}
          className={style.textarea}
          onChange={inputComment}
          autoFocus
        ></textarea>
        <Text As='button'
          onClick={(e) => {
            e.preventDefault();
            console.log(textareaText);
          }} className={style.btn}>Отправить
        </Text>
      </Text>}
    </Text>
  );
};
