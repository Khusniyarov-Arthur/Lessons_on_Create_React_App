import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      ups: 1,
      htumbnail: '',
      title: 'Title1',
      author: 'NickName1',
      date: '2020-02-24T00:05:00.000Z',
      id: '123'
    },
    {
      ups: 2,
      htumbnail: '',
      title: 'Title2',
      author: 'NickName2',
      date: '2021-02-24T10:05:00.000Z',
      id: '453'
    },
    {
      ups: 3,
      htumbnail: '',
      title: 'Title3',
      author: 'NickName3',
      date: '2023-02-24T20:05:00.000Z',
      id: '783'
    }
  ];
  return (
    <ul className={style.list}>
      {postsData.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};
