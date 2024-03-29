import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {Home} from '../Home/Home';
import {Error} from '../Error/Error';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/auth' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
      </Routes>
    </Layout>
  </main>
);
