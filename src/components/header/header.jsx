import React from 'react';
import UtilNav from '../util_nav/util_nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <UtilNav/>
    </header>
  );
};

export default Header;