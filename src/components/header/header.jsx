import React from 'react';
import GlobalNav from '../global_nav/global_nav';
import SearchBox from '../search_box/search_box';
import UtilNav from '../util_nav/util_nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <UtilNav/>
      <GlobalNav/>
      <SearchBox/>
      </div>
    </header>
  );
};

export default Header;