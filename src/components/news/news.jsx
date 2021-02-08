import React, {useRef} from 'react';
import styles from './news.module.css';
import ArticleButton from '../article_button/article_button';

const News = () => {
  const newsRef = useRef();
  const buttonInfo = {
    title: '농심 소식',
    link: '',
  }
  return (
    <article className={styles.news} ref={newsRef}>
      <button className={styles[`button-quick`]}
        onClick={() => window.scrollTo({top: window.pageYOffset + newsRef.current.getBoundingClientRect().top ,behavior: 'smooth'})}>
        <i className="fas fa-chevron-down"></i>
      </button>
      <h2>내일을 위한 새롭고 활기찬 농심 소식</h2>
      <div className={styles[`swiper-container`]}>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default News;