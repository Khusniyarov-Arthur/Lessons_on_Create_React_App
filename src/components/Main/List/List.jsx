import style from './List.module.css';
import Post from './Post';
import {Text} from '../../../UI/Text';
import {usePosts} from '../../../hooks/usePosts';

export const List = () => {
  const [posts] = usePosts();

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

