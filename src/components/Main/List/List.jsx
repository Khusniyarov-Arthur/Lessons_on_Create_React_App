import style from './List.module.css';
import Post from './Post';
import {Text} from '../../../UI/Text';
// import {usePosts} from '../../../hooks/usePosts';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsing} from '../../../store/post/postAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  // const [posts] = usePosts();
  const posts = useSelector(state => state.postReducer.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log('page: ', page);

  useEffect(() => {
    dispatch(postRequestAsing(page));
  }, [page]);

  useEffect(() => {
    // if (!posts.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsing());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      {(posts.length === 0) && <Text center As='h3'>Загрузка данных...</Text>}
      <ul className={style.list}>
        {posts.map((item) => (
          <Post key={item.data.id} postData={item.data} />
        ))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};

