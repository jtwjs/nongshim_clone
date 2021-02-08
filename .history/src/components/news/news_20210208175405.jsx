import React, {useRef} from 'react';
import styles from './news.module.css';

const News = () => {
  const newsRef = useRef();
  return (
    <section className={styles.news}>
      <button className={styles[`button-quick`]}
        onClick={() => window.scrollTo({top: 0 ,behavior: 'smooth'})}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  );
};

export default News;