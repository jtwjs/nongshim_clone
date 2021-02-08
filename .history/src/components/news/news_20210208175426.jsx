import React, {useRef} from 'react';
import styles from './news.module.css';

const News = () => {
  const newsRef = useRef();
  return (
    <section className={styles.news} ref={newsRef}>
      <button className={styles[`button-quick`]}
        onClick={() => window.scrollTo({top:newsRef.current.getBoundingClientRect().top ,behavior: 'smooth'})}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  );
};

export default News;