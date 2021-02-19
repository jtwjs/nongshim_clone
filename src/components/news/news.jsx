import React, {useRef} from 'react';
import styles from './news.module.css';
import SwiperCore, {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ArticleButton from '../article_button/article_button';
import news_0 from '../../assets/img/main/news/news_0.jpg';
import news_1 from '../../assets/img/main/news/news_1.jpg';
import news_2 from '../../assets/img/main/news/news_2.jpg';
import news_3 from '../../assets/img/main/news/news_3.jpg';
import news_4 from '../../assets/img/main/news/news_4.jpg';
import news_5 from '../../assets/img/main/news/news_5.jpg';
import news_6 from '../../assets/img/main/news/news_6.jpg';
import news_7 from '../../assets/img/main/news/news_7.jpg';
import news_8 from '../../assets/img/main/news/news_8.jpg';
import news_9 from '../../assets/img/main/news/news_9.jpg';
import mainData from '../../data/main.json';

SwiperCore.use([Virtual]);

const News = () => {
  const newsRef = useRef();
  const buttonInfo = {
    title: '농심 소식',
    link: '',
  }
  const imgList = [news_0,news_1,news_2,news_3,news_4,news_5,news_6,news_7,news_8,news_9 ];



  return (
    <article className={styles.news} ref={newsRef}>
      <button className={styles[`button-quick`]}
        onClick={() => window.scrollTo({top: window.pageYOffset + newsRef.current.getBoundingClientRect().top ,behavior: 'smooth'})}>
        <i className="fas fa-chevron-down"></i>
      </button>
      <h2>내일을 위한 새롭고 활기찬 농심 소식</h2>
      <Swiper
      slidesPerView={'auto'}
      initialSlide={0}
      loop={true}
      centeredSlides={true}
      className={styles[`swiper-container`]}
      >
        {
          mainData.news.map((content, index) => (
            <SwiperSlide key={content.id} virtualIndex={index} className={styles[`swiper-slide`]}>
              <figure className={styles[`news-item`]}>
                <img src={imgList[index]} alt='news title img'/>
                <figcaption>
                  <h3 className={styles[`news-title`]}>
                    <a href={content.link}>
                     {content.title}
                    </a>
                  </h3>
                  <span className={styles[`news-date`]}>{content.date}</span>
                  <a href={content.link} className={styles.more} title="더 보기">
                    <span>more</span>
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
          )
          )}
      </Swiper>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default News;