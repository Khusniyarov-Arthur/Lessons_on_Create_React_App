import Header from './components/Header';
import Main from './components/Main';
// import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  );
};


export default App;
