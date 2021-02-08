import React from 'react';
import Home from '../home/home';
import styles from './main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Home/>
      <section className={styles.empty}>

      </section>
    </main>
  );

};

export default Main;