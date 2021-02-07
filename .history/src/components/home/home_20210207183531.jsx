import React, {useEffect} from 'react';
import styles from './home.module.css';
import SwiperItem from '../swiper_item/swiper_item';

const Home = () => {
  const swiper = [
    {
      id: 1,
      index: 1,
      title: '',
    },
    {
      id: 2,
      index: 2,
      title: '일상의 가치를 더합니다',
    },
    {
      id: 3,
      index: 3,
      title: '행복한 가치를 더합니다',
    },
    {
      id: 4,
      index: 4,
      title: '인생을 맛있게, 농심',
    },
    {
      id: 5,
      index: 5,
      title: 'Spice Up Your Life',
      subTitle: '인생을 맛있게, 농심',
    },
  ];

useEffect(() => {
  swiper.push({...swiper[0]});
}, [swiper])

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles[`swiper-container`]}>
          <ul className={styles.swiper}>
            {
              swiper.map(item => (
                <SwiperItem key={item.id} item={item}/>
              ))
            }            
          </ul>
        </div>
        <div className={styles[`swiper-pagination`]}>
          <ul className={styles.pagination}>
            {}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;