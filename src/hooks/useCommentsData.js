import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = ({id}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [commentsData, setcommentsData] = useState({});
  const {token} = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    })
      .then((
          [
            {
              data: {
                children: [
                  {
                    data: {
                      author: authorData,
                      title: titleData,
                      created: createdData,
                      selftext: selftextData,
                    }
                  }
                ]
              }
            },
            {
              data: {
                children: childrenData,
              }
            },
          ]
      ) => {
        const commentMessageData = childrenData.map((item) => item.data);
        const lengthComments = commentMessageData.length;
        commentMessageData.splice(commentMessageData.length - 1, commentMessageData.length);
        setIsLoaded(true);
        return (
          setcommentsData({authorData, titleData, selftextData, createdData, commentMessageData, lengthComments})
        );
      })
      .catch(error => {
        console.error(error);
        setIsLoaded(true);
        setError(error);
        setcommentsData({});
      });
  }, [id]);
  return {commentsData, error, isLoaded};
};
