import React, {memo} from 'react';
import Home from '../home/home';
import News from '../news/news';
import Intro from '../intro/intro';
import styles from './main.module.css';

const Main = memo(() => {
  return (
    <main className={styles.main}>
      <Home/>
      <News/>
      <Intro/>
    </main>
  );

});

export default Main;