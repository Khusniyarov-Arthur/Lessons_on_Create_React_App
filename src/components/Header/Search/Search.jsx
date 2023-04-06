import {useDispatch} from 'react-redux';
import {useState} from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {searchRequest} from '../../../store/search/searchAction.js';

export const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };


  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        className={style.search}
        type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      >
      </input>
      <button className={style.button} type='submit'>
        <SearchIcon className={style.svg} width="128" height="128" />
      </button>
    </form>
  );
};
