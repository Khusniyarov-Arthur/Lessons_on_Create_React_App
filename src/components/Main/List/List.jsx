import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsing} from '../../../store/post/postAction';
import {Outlet, useParams} from 'react-router-dom';
import {Text} from '../../../UI/Text';

export const List = () => {
  const posts = useSelector(state => state.postReducer.data);
  const loading = useSelector(state => state.postReducer.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postRequestAsing(page));
  }, [page]);

  useEffect(() => {
    if (!posts.length && !loading) return;
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
      {posts.length === 0 ? (
        <Text As='div' center>Постов нет</Text>
      ) : (
        <>
          <ul className={style.list}>
            {posts.map((item) => (
              <Post key={item.data.id} postData={item.data} />
            ))}
            <li ref={endList} className={style.end}/>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

