import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
// import {tokenContext} from '../context/tokenContext';
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  // const {token} = useContext(tokenContext);
  const token = useSelector(state => state.tokenReducer.token);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=35`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    })
      .then((posts) => {
        return (
          setPosts(posts.data.children)
        );
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [token]);
  return [posts];
};
