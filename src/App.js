import Header from './components/Header';
import Main from './components/Main';
import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }
      />
    </Routes>
  );
};

export default App;
