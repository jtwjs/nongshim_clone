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

SwiperCore.use([Virtual]);

const News = () => {
  const newsRef = useRef();
  const buttonInfo = {
    title: '농심 소식',
    link: '',
  }

  const slides = [
    {
      id: 0,
    img: news_0,
    title: '2020년 소비자가 가장 사랑한 라면은? "농심짜파게티"',
    date: '2021.02.02',
    link: '',
  },
  {
    id: 1,
    img: news_1,
    title: "농심,'포테토칩 엣지 통감자구이맛'출시",
    date: '2021.01.27',
    link: '',
  },
  {
    id: 2,
    img: news_2,
    title: "농심, 맛있고 깔끔한 '짬뽕건면' 출시",
    date: '2021.01.21',
    link: '',
  },
  {
    id: 3,
    img: news_3,
    title: "농심, 비건(Vegan)브랜드 '베지가든'사업 본격화",
    date: '2021.01.12',
    link: '',
  },
  {
    id: 4,
    img: news_4,
    title: '농심 신년사 "코로나19 이후 변화를 준비하자"',
    date: '2021.01.04',
    link: '',
  },
  {
    id: 5,
    img: news_5,
    title: "농심, 안성탕면 광고모델로 강호동 발탁",
    date: '2020.12.23',
    link: '',
  },
  {
    id: 6,
    img: news_6,
    title: "농심, 색다른 양념감자 스낵 '감튀 레드칠리맛'출시",
    date: '2020.12.22',
    link: '',
  },
  {
    id: 7,
    img: news_7,
    title: "농심 새우깡 등 깡스낵 매출 사상 최대",
    date: '2020.12.16',
    link: '',
  },
  {
    id: 8,
    img: news_8,
    title: "농심, 사랑의 신라면으로 따듯한 온정 나눔",
    date: '2020.12.11',
    link: '',
  },
  {
    id: 9,
    img: news_9,
    title: "농심, '제25회 소비자의 날'대통령 표창 수상",
    date: '2020.12.04',
    link: '',
  },
];


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
          slides.map((content, index) => (
            <SwiperSlide key={content.id} virtualIndex={index} className={styles[`swiper-slide`]}>
              <figure className={styles[`news-item`]}>
                <img src={content.img} alt='news title img'/>
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