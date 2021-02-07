import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles[`swiper-container`]}>
          <ul className={styles.swiper}>
            
          </ul>
        </div>
        <div className={styles[`swiper-pagination`]}>
          <ul className={styles.pagination}>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;