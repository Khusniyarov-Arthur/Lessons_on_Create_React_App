import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
export const FormComment = () => {
  const [textareaText, setTextareaText] = useState('');
  const {auth} = useAuth();
  const [addComment, setAddComment] = useState(false);

  const inputComment = e => {
    setTextareaText(e.target.value);
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
          onClick={() => {
            console.log(textareaText);
          }} className={style.btn}>Отправить
        </Text>
      </Text>}
    </Text>
  );
};
