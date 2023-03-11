import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import React, {useState} from 'react';
import {assignId} from '../../utils/generateRandomId.js';
console.log(assignId());
const LIST = [
  {value: 'Главная'},
  {value: 'Просмотры'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);

export const Main = () => {
  const [list, setList] = useState(LIST);
  return (
    <main className={style.main}>
      <Layout>
        <Tabs list={list} setList={setList}/>
        <List />
      </Layout>
    </main>
  );
};
