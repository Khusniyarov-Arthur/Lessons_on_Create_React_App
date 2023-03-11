import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    ups: 24,
    htumbnail: '',
    title: 'Title',
    author: 'NickName',
    date: '2022-02-24T00:05:00.000Z',
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
