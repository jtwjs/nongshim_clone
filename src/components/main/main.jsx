import React, {memo} from 'react';
import Home from '../home/home';
import News from '../news/news';
import Intro from '../intro/intro';
import styles from './main.module.css';
import Story from '../story/story';
import Management from '../management/management';
import Brand from '../brand/brand';
import Map from '../map/map';
import Etc from '../etc/etc';

const Main = memo(() => {
  return (
  <main className={styles.main}>
      <Home/>
      <News/>
      <Intro/>
      <Story/>
      <Management/>
      <Brand/>
      <Map/>
      <Etc/>
    </main>
  );

});

export default Main;