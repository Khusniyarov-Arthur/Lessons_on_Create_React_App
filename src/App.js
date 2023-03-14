import Header from './components/Header';
import Main from './components/Main';
import {tokenContext} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  return (
    <tokenContext.Provider value={{token, delToken}}>
      <AuthContextProvider>
        <Header />
        <Main/>
      </AuthContextProvider>
    </tokenContext.Provider>
  );
}

export default App;
