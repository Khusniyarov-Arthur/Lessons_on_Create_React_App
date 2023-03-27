import Header from './components/Header';
import Main from './components/Main';
import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
// import {Error} from './components/Error/Error';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
          {/* <Error/> */}
        </>
      }>
        {/* <Route path='*' element={<Error/>}/> */}
      </Route>
    </Routes>
  );
};

export default App;
