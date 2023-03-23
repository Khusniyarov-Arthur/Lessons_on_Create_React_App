import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {postRequestAsing} from '../store/post/postAction';

export const usePosts = () => {
  // const [posts, setPosts] = useState([]);
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postReducer.data);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsing());
    // if (!token) return;
    // fetch(`${URL_API}/best?limit=35`, {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // }).then((response) => {
    //   return response.json();
    // })
    //   .then((posts) => {
    //     return (
    //       setPosts(posts.data.children)
    //     );
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     setPosts([]);
    //   });
  }, [token]);
  return [posts];
};
