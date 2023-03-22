import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import {Text} from '../../../UI/Text';

export const List = () => {
  const [posts] = useContext(postsContext);
  console.log(posts);
  return (
    <>
      {(posts.length === 0) && <Text center As='h3'>Загрузка данных...</Text>}
      <ul className={style.list}>
        {posts.map((item) => (
          <Post key={item.data.id} postData={item.data} />
        ))}
      </ul>
    </>
  );
};

