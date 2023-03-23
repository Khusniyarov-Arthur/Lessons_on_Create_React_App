import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {URL_API} from '../api/const';
// import {useSelector} from 'react-redux';
import {commentsDataRequestAsing} from '../store/commentsData/commentsDataAction';
export const useCommentsData = ({id}) => {
  // const token = useSelector(state => state.tokenReducer.token);
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [commentsData, setcommentsData] = useState({});
  const commentsData = useSelector(state => state.commentsDataReducer.dataComments);
  console.log('commentsData: ', commentsData);
  const status = useSelector(state => state.commentsDataReducer.status);
  console.log('status: ', status);
  const dataPost = useSelector(state => state.commentsDataReducer.dataPost);
  console.log('dataPost: ', dataPost);
  const error = useSelector(state => state.commentsDataReducer.error);
  console.log('error: ', error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsing(id));
    // if (!token) return;
    // fetch(`${URL_API}/comments/${id}`, {
    //   headers: {
    //     Authorization: `bearer ${token}`,
    //   },
    // }).then((response) => {
    //   return response.json();
    // })
    //   .then((
    //       [
    //         {
    //           data: {
    //             children: [
    //               {
    //                 data: {
    //                   author: authorData,
    //                   title: titleData,
    //                   created: createdData,
    //                   selftext: selftextData,
    //                 }
    //               }
    //             ]
    //           }
    //         },
    //         {
    //           data: {
    //             children: childrenData,
    //           }
    //         },
    //       ]
    //   ) => {
    //     const commentMessageData = childrenData.map((item) => item.data);
    //     const lengthComments = commentMessageData.length;
    //     commentMessageData.splice(commentMessageData.length - 1, commentMessageData.length);
    //     setIsLoaded(true);
    //     return (
    //       setcommentsData({authorData, titleData, selftextData, createdData, commentMessageData, lengthComments})
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     setIsLoaded(true);
    //     setError(error);
    //     setcommentsData({});
    //   });
  }, [id]);
  return {commentsData, dataPost, status, error};
};
