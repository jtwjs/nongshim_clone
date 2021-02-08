import React from 'react';
import styles from './news.module.css';

const News = () => {
  return (
    <section className={styles.news}>
      <button className={styles[`button-quick`]}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  );
};

export default News;