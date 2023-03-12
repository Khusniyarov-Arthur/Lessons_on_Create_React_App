import style from './PostContent.module.css';
// импортируем стили в наш компонент
import PropTypes from 'prop-types';
// ипортируем PropTypes в наш компонент
import {Text} from '../../../../../UI/Text';

export const PostContent = ({content}) => {
  // описвыаю компонент, он принимает в виде пропса массив
  const [title, author] = content;
  // деструктурирую данный полученный пропс, чтобы из него взять данные и передать в описание компонента
  return (
    // возврощаем содержимое компонента
    <Text As='div' className={style.content}>
      {/* блоку который содержит содержимое поста присваевается клласс */}
      <Text As='h2' className={style.title}>
        {/* заголовку поста присваевается класс */}
        <Text As='a'
          size={14}
          tsize={14}
          className={style.linkPost}
          href='#post'>
          {/* ссылке поста присваевается класс и задается якорь post*/}
          {title}
          {/* в тег а заносится title из пропса content  */}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {/* ссылке поста присваевается класс и задается якорь author*/}
        {author}
        {/* в тег а заносится author из пропса content  */}
      </Text>
    </Text>
  );
};

PostContent.propTypes = {
  content: PropTypes.array,
};
// проверяем тип полученного пропса, в данном случае мы в просп принимаем массив
