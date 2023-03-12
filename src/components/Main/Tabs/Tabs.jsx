import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomId.js';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounce} from '../../../utils/debounse.js';
import {Text} from '../../../UI/Text';

const LIST = [
  {value: 'Меню'},
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшее', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [itemBtn, setitemBtn] = useState('Меню');

  const handleResize = () => {
    document.documentElement.clientWidth < 768 ?
    setIsDropdown(true) :
    setIsDropdown(false);
  };

  useEffect(() => {
    const debounsResize = debounce(handleResize, 200);
    handleResize();
    window.addEventListener('resize', debounsResize);
    return () => {
      window.removeEventListener('resize', debounsResize);
    };
  }, []);

  return (
    <Text As='div' className={style.container}>
      {isDropdown && (<Text As='div'iv className={style.wrapperBtn}>
        <Text As='button' className={style.btn} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {itemBtn}
          <ArrowIcon width={15} height={15}/>
        </Text>
      </Text>)}

      {(isDropdownOpen || !isDropdown) && <Text As='ul' onClick={() => setIsDropdownOpen(false)} className={style.list}>
        {LIST.map(({value, id, Icon}) => (
          <Text As='li' className={style.item} key={id}>
            <Text As='button' className={style.btn} onClick={() => setitemBtn(value)}>
              {value}
              {Icon && <Icon width={20} height={20}/>}
            </Text>
          </Text>
        ))}
      </Text>}
    </Text>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
