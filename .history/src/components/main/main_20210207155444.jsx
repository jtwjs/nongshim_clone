import React from 'react';
import Home from '../home/home';
import styles from './main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Home/>
    </main>
  );

};

export default Main;