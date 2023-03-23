import Header from './components/Header';
import Main from './components/Main';
import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <>
      <Header />
      <Main />
    </>
  );
};


export default App;
