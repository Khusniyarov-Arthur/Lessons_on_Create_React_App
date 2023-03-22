import Header from './components/Header';
import Main from './components/Main';
// import {TokenContextProvider} from './context/tokenContext';
import {PostsContextProvider} from './context/postsContext';
import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <PostsContextProvider>
      <Header />
      <Main />
    </PostsContextProvider>
  );
};


export default App;
