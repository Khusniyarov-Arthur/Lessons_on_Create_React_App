import style from './PostContent.module.css';
// импортируем стили в наш компонент
import PropTypes from 'prop-types';
// ипортируем PropTypes в наш компонент

export const PostContent = ({content}) => {
  // описвыаю компонент, он принимает в виде пропса массив
  const [title, author] = content;
  // деструктурирую данный полученный пропс, чтобы из него взять данные и передать в описание компонента
  return (
    // возврощаем содержимое компонента
    <div className={style.content}>
      {/* блоку который содержит содержимое поста присваевается клласс */}
      <h2 className={style.title}>
        {/* заголовку поста присваевается класс */}
        <a className={style.linkPost} href='#post'>
          {/* ссылке поста присваевается класс и задается якорь post*/}
          {title}
          {/* в тег а заносится title из пропса content  */}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#author'>
        {/* ссылке поста присваевается класс и задается якорь author*/}
        {author}
        {/* в тег а заносится author из пропса content  */}
      </a>
    </div>
  );
};

PostContent.propTypes = {
  content: PropTypes.array,
};
// проверяем тип полученного пропса, в данном случае мы в просп принимаем массив
