import React from 'react';
import styles from './home.module.css';
import SwiperItem from '../swiper_item/swiper_item';

const Home = () => {
  const swiper = [
    {
      id: 1,
      title: '',
      backgroundImg: '../../assets/img/main/home_1',
    },
    {
      id: 2,
      title: '일상의 가치를 더합니다',
      backgroundImg: '../../assets/img/main/home_2',
    },
    {
      id: 3,
      title: '행복한 가치를 더합니다',
      backgroundImg: '../../assets/img/main/home_3',
    },
    {
      id: 4,
      title: '인생을 맛있게, 농심',
      backgroundImg: '../../assets/img/main/home_4',
    },
    {
      id: 5,
      title: 'Spice Up Your Life',
      subTitle: '인생을 맛있게, 농심',
      backgroundImg: '../../assets/img/main/home_5',
    },
    {
      id: 6,
      title: '',
      backgroundImg: '../../assets/img/main/home_1',
    },
  ];



  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles[`swiper-container`]}>
          <ul className={styles.swiper}>
            {
              swiper.map(item => (
                <SwiperItem key={item.id}/>
              ))
            }            
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