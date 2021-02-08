import React, {memo} from 'react';
import Home from '../home/home';
import styles from './main.module.css';

const Main = memo(() => {
  return (
    <main className={styles.main}>
      <Home/>
      <News/>
    </main>
  );

});

export default Main;