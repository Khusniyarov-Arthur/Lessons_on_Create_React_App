import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=3`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    })
      .then((posts) => setPosts(posts.data.children))
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [token]);
  return [posts];
};

