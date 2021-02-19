import React, {useState} from 'react';
import ArticleButton from '../article_button/article_button';
import styles from './story.module.css';
import SwiperCore, {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import story_0 from '../../assets/img/main/story/story_0.jpg';
import story_1 from '../../assets/img/main/story/story_1.jpg';
import story_2 from '../../assets/img/main/story/story_2.jpg';
import story_3 from '../../assets/img/main/story/story_3.jpg';
import story_4 from '../../assets/img/main/story/story_4.jpg';
import story_5 from '../../assets/img/main/story/story_5.jpg';
import story_6 from '../../assets/img/main/story/story_6.jpg';
import story_7 from '../../assets/img/main/story/story_7.jpg';
import story_8 from '../../assets/img/main/story/story_8.jpg';
import story_9 from '../../assets/img/main/story/story_9.jpg';
import mainData from '../../data/main.json';

SwiperCore.use([Virtual]);
const imgList = [story_0,story_1,story_2,story_3,story_4,story_5,story_6,story_7,story_8,story_9];

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const buttonInfo = {
    title: 'N.LIVE',
    link: '',
  };

  return (
    <article className={styles.story}>
      <h2>m.live로 즐기는 농심이야기</h2>
      <div className={styles[`story-view`]}>
        <Swiper
          slidesPerView={'auto'}
          initialSlide={0}
          loop={true}
          centeredSlides={true}
          onSlideChange={(e) => setCurrentSlide(e.activeIndex % 10)}
          className={styles[`swiper-container`]}>
            {
              mainData.story.slide.map((content,index) => (
                <SwiperSlide key={content.id} virtualIndex={index} className={styles[`swiper-slide`]}>
                  <figure className={`${styles.media} ${styles[content.media]}`}>
                    <a href={content.link} target="_blank" rel="noreferrer">
                      <img src={imgList[index]} alt='media title img'/>
                    </a>
                  </figure>
                </SwiperSlide>
              ))
            }
        </Swiper>
        <div className={styles.text}>
          <div className={styles[`text-wrap`]}>
            {
              mainData.story.content.map(content => (
                <div key={content.id} className={`${styles[`text-item`]} ${currentSlide === content.id ? styles.active : ''}`}>
                  <strong className={styles.tag}>
                    #{content.tag}
                  </strong>
                  {
                    content.content.map((item,index) => (
                      <p key={index} className={styles.desc}>{item}</p>
                    ))
                  }
                  <span className={styles.date}>{content.date}</span>
                </div>
              ))              
            }
          </div>
        </div>
        <div className={styles.phone}>
        </div>
      </div>
      <ArticleButton info={buttonInfo}/>
    </article>
  );
};

export default Story;