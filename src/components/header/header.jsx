import React, {useState} from 'react';
import GlobalNav from '../global_nav/global_nav';
import SearchBox from '../search_box/search_box';
import UtilNav from '../util_nav/util_nav';
import styles from './header.module.css';

const Header = () => {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const closeSearchBox = () => {
    console.log('닫음');
    setIsShowSearchBox(false);
  }

  const openSearchBox = () => {
    console.log('열음');
    setIsShowSearchBox(true);
  }


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <UtilNav/>
        <GlobalNav
        isShowSearchBox={isShowSearchBox}
          openSearchBox={openSearchBox}/>
        <SearchBox 
          isShowSearchBox={isShowSearchBox}
          closeSearchBox={closeSearchBox}
          />
      </div>
    </header>
  );
};

export default Header;